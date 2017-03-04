
var addCount = 1;
var cacheNodeTag;

/**
 * 编辑节点记录 ： edit_id_newName
 * 删除节点记录:  del_id
 * 增加节点记录:  add_pid_newName
 */
var apLog = new Array();
/**
 * 模拟数据库自增id
 */
var nodeId=14;

/**
 * type=1 增加 2 删除 3 修改
 * @param parId
 * @param curNode
 * @param type
 */
function addNodeLog(parId,name,type){
	if(type==1){
		apLog.push("add_"+parId+"_"+name);
	}else if(type==2){
		apLog.push("del_"+parId);
	}else if(type==3){
		apLog.push("edit_"+parId+"_"+name);
	}
	//console.log(apLog);
}



function submitData(){
	if(apLog.length==0)
		return "";
	 var data=apLog.join(";");
	
	 $.post("/admin/category/saveTree",{apLog:data},function(data){
		//console.log(data);
		if(data.success){
			alert("保存成功");
		}else
			alert("保存失败");
		
	 },'json');
	 
}

var zTree, rMenu;

		
		
		
		var setting = {
			edit: {
				enable: true
			},
			view: {
				dblClickExpand: true
			},
			check: {
				enable: true
			},
			callback: {
				onRightClick: OnRightClick,
				beforeRename: renameNode
			}
		};

		var zNodes =[
						{
						id :0,name:"大道至简",open:true,noR:true,children:
						[
						{id:1, name:"道法 1", open:true, 
							children:[
								   {id:2, name:"道法 1-1"},
								   {id:3, name:"道法1-2"}

							]},
						{id:4, name:"道法 2", open:true,
							children:[
								   {id:5, name:"道法 2-1"},
								   {id:6, name:"道法 2-2"},
								   {id:7, name:"道法 2-3"},
								   {id:8, name:"道法 2-4"}
							]},
						{id:9, name:"道法 3", open:true,
							children:[
								   {id:10, name:"道法 3-1"},
								   {id:11, name:"道法 3-2"},
								   {id:12, name:"道法 3-3"},
								   {id:13, name:"道法 3-4"}
							]}
			  	 		]}
				];

		/**
		 * 编辑节点
		 * @param treeId
		 * @param treeNode
		 * @param newName
		 */
		function renameNode(treeId,treeNode,newName){
			//console.log(treeId)
			addNodeLog(treeNode.id,newName,3);
			return true;
		}
		
		
		
		
		function OnRightClick(event, treeId, treeNode) {
			if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
				zTree.selectNode(treeNode);
				showRMenu("root", event.clientX, event.clientY);
			} else if (treeNode && !treeNode.noR) {
				zTree.selectNode(treeNode);
				showRMenu("node", event.clientX, event.clientY);
			}
		}

		function showRMenu(type, x, y) {
			$("#rMenu ul").show();
			if (type=="root") {
				$("#m_add").show();
				$("#m_del").hide();
				//$("#m_check").hide();
				//$("#m_unCheck").hide();
			} else {
				$("#m_add").show();
				$("#m_del").show();
				//$("#m_check").show();
				//$("#m_unCheck").show();
			}
			rMenu.css({"top":y+"px", "left":x+"px", "visibility":"visible"});

			$("body").bind("mousedown", onBodyMouseDown);
		}
		function hideRMenu() {
			if (rMenu) rMenu.css({"visibility": "hidden"});
			$("body").unbind("mousedown", onBodyMouseDown);
		}
		function onBodyMouseDown(event){
			if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
				rMenu.css({"visibility" : "hidden"});
			}
		}
		
		

		function addTreeNode() {
			hideRMenu();
			nodeId++;
			var newNode = { name:"技能点" + (addCount++),id:nodeId};
			
			if (zTree.getSelectedNodes()[0]) {
				newNode.checked = zTree.getSelectedNodes()[0].checked;
				zTree.addNodes(zTree.getSelectedNodes()[0], newNode);
			} else {
				//zTree.addNodes(zTree.getNodes()[0], newNode);
				alert("必须先选择节点再增加");
			}
			addNodeLog(zTree.getSelectedNodes()[0].id,newNode.name,1);
		}

		

		function removeTreeNode() {
			hideRMenu();
			var nodes = zTree.getSelectedNodes();
			if (nodes && nodes.length>0) {
				if (nodes[0].children && nodes[0].children.length > 0) {
					var msg = "要删除的节点是父节点，如果删除将连同子节点一起删掉。\n\n请确认！";
					if (confirm(msg)==true){
						zTree.removeNode(nodes[0]);
					}
				} else {
					zTree.removeNode(nodes[0]);
				}
			}
			addNodeLog(nodes[0].id,"",2);
		}
		function checkTreeNode(checked) {
			var nodes = zTree.getSelectedNodes();
			if (nodes && nodes.length>0) {
				zTree.checkNode(nodes[0], checked, true);
			}
			hideRMenu();
		}
		function resetTree() {
			hideRMenu();
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
		}
		
		var $j = jQuery.noConflict();
		$j(document).ready(function() {
			//console.log($j.fn);
			$j.fn.zTree.init($j("#treeDemo"), setting, zNodes);
			zTree = $j.fn.zTree.getZTreeObj("treeDemo");
			rMenu = $j("#rMenu");
			zTree.setting.edit.showRemoveBtn = false;
		});
	

