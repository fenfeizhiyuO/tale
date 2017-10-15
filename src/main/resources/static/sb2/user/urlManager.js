
var saveUrlType_url="/url/saveUrlType";
var listUrlType_url="/url/typeList";
var saveUrl_url="/url/saveUrl";
var listUrl_url="";
var app = angular.module('urlManager', []);


app.service('httpService', function($http) {
    
    this.getData=function (url,errorMsg,successFunction) {
        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {
            successFunction(response.data);
        }, function errorCallback(response) {
            alert('网络出错');
            return ;
        });
    };
    
    this.postForm = function (url,data,errorMsg,successFunction) {
        $http({
            method:'post',
            url:url,
            data:data,
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function (data) {
                return $.param(data);
            }
        }).then(function successCallback(response) {
            successFunction(response.data);
        }, function errorCallback(response) {
            alert('网络出错');
            return ;
        });
    }
});


app.controller('urlEdit', function($scope,httpService) {
    //url地址分类
    httpService.getData(listUrlType_url,"",function (data) {
        $scope.urlTypeList=data.payload;
    });

    $scope.saveUrl=function () {
        if(NotNullStr($scope.urlType,"url类型不能为空")
            &&NotNullStr($scope.urlTitle,"url标题不能为空")
            &&NotNullStr($scope.url,"url不能为空")
         ){
           var data={"type":$scope.urlType,"urlTitle":$scope.urlTitle,"url":$scope.url,"urlDesc":replaceNullStr($scope.urlDesc,"无")};
           httpService.postForm(saveUrl_url,data,"",function (data) {
               if(data.success){
                   alert("保存成功");
               }else {
                   alert(data.msg);
                   return;
               }
           });
        }
    };


    $scope.saveUrlType=function () {
        if(NotNullStr($scope.urlTypeName)){
            var data={"name":$scope.urlTypeName};
            var res=httpService.postForm(saveUrlType_url,data,"请求出错",function (data) {
                if(data.success){
                    $scope.urlTypeList.push({"id":data.payload,"name":$scope.urlTypeName});
                    return "保存成功";
                }else{
                    alert(data.msg);
                    return;
                }
            });
        }
    };
    
    $scope.delUrlType=function (id) {
        alert(id);
    }
});
