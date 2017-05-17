( function(angular){
	//1.创建模块
	var app = angular.module( "coming_soon" , ["ngRoute"]);
	//2.配置路由规则
	app.config( [ "$routeProvider",function($routeProvider){
		$routeProvider.when( "/coming_soon",{
			templateUrl: "./coming_soon/coming_soon.html",
			controller:"comeController",
		} )
	} ] );
	app.controller( "comeController", [ "$scope",function($scope){
		$scope.data = [];
	} ] );
} )(angular);