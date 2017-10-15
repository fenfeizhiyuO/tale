var app = angular.module('urlManager', []);
app.controller('urlEdit', function($scope) {
    //url地址分类
    $scope.urlTypeList = [{"id":1,"name":"分类1"},{"id":2,"name":"分类2"},{"id":3,"name":"分类3"},
        {"id":3,"name":"分类3"},{"id":3,"name":"分类3"},{"id":3,"name":"分类3"},{"id":3,"name":"分类3"}];
    //
    $scope.saveUrl=function () {
        if(NotNullStr($scope.urlType,"url类型不能为空")
            &&NotNullStr($scope.urlTitle,"url标题不能为空")
            &&NotNullStr($scope.url,"url不能为空")
         ){
           var data={"urlType":$scope.urlType,"urlTitle":$scope.urlType,"url":$scope.url,"urlDesc":replaceNullStr($scope.urlDesc,"无")};
           console.log(data);
        }
    };
    $scope.delUrlType=function (id) {
        alert(id);
    }
});

