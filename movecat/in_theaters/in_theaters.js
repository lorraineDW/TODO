( function(angular){
	//1.创建模块
	var app = angular.module( "in_theaters" , ["ngRoute"]);
	//2.配置路由规则
	app.config( [ "$routeProvider",function($routeProvider){
		$routeProvider.when( "/in_theaters",{
			templateUrl: "./in_theaters/in_theaters.html",
			controller:"theatController",
		} )
	} ] );
	app.controller( "theatController", [ "$scope","$http",function($scope,$http){
		$http.get("./data.json")
			.then( function(res){
				$scope.data = res.data;
			} );
	} ] );
} )(angular);