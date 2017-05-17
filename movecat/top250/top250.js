( function(angular){
	//1.创建模块
	var app = angular.module( "top250" , ["ngRoute"]);
	//2.配置路由规则
	app.config( [ "$routeProvider",function($routeProvider){
		$routeProvider.when( "/top250",{
			templateUrl: "./top250/top250.html",
			controller:"topController",
		} )
	} ] );
	app.controller( "topController", [ "$scope",function($scope){
		$scope.data = [];
	} ] );
} )(angular);