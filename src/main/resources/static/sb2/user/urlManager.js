
var saveUrlType_url="/url/saveUrlType";
var listUrlType_url="/url/typeList";
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
    //$scope.urlTypeList = [{"id":1,"name":"分类1"},{"id":2,"name":"分类2"},{"id":3,"name":"分类3"}];

    httpService.getData(listUrlType_url,"",function (data) {
        $scope.urlTypeList=data.payload;
    });

    $scope.saveUrl=function () {
        if(NotNullStr($scope.urlType,"url类型不能为空")
            &&NotNullStr($scope.urlTitle,"url标题不能为空")
            &&NotNullStr($scope.url,"url不能为空")
         ){
           var data={"type":$scope.urlType,"urlTitle":$scope.urlTitle,"url":$scope.url,"urlDesc":replaceNullStr($scope.urlDesc,"无")};
           console.log(data);
        }
    };


    $scope.saveUrlType=function () {
        if(NotNullStr($scope.urlTypeName)){
            var data={"name":$scope.urlTypeName};
            var res=httpService.postForm(saveUrlType_url,data,"请求出错",function (data) {
                if(data.success){
                    $scope.urlTypeList.push({"id":data.payload,"name":$scope.urlTypeName});
                    return "保存成功";
                }
            });

        }
    };
    
    $scope.delUrlType=function (id) {
        alert(id);
    }
});

