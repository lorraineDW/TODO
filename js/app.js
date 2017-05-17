(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	//1.创建模块
	var app = angular.module( "myapp" , ["service"]);
	//2.创建控制器
	app.controller( "todosController",[
	               "$scope",
	               "$location",
	               "myService",
	 function($scope,$location,myService){
		/功能需求*/
		//1.渲染数据
		$scope.todos = myService.get();
		//2.添加数据
		$scope.newTodo = "";
		$scope.add = function(){
			if(!$scope.newTodo){
				return;
			}
			myService.add($scope.newTodo);
			$scope.newTodo = "";
		};
		//3.删除数据
		$scope.remove = function(id){
			myService.remove(id);
		}
		//4.修改数据
		$scope.isEsditedId = -1;
		$scope.change = function(id){
			$scope.isEsditedId = id;
		};
		$scope.save = function(id){
			$scope.isEsditedId = -1;
			myService.save();
		};
		//5.状态显示
		$scope.selch = function(){
			this.save();
		};
		//6.批量修改状态显示
		$scope.selected = false;
		$scope.toggleAll = function(){
			myService.toggleAll($scope.selected);
		};
		//7.未完成数据数量
		$scope.amount = function(){
			return myService.amount();
		};
		//8.清除已完成数据
		$scope.recomplete = function(){
			myService.recomplete();
		};
		//9.切换数据
		//普通方法
		/*$scope.selAll = function(){
			$scope.isCompleted = {};
		};
		$scope.active = function(){
			$scope.isCompleted = { completed:false };
		};
		$scope.completed = function(){
			$scope.isCompleted = { completed:true };
		};*/
		//$watch监视
		$scope.loc = $location;
		$scope.$watch( "loc.url()", function( now,old ){
			switch(now){
				case "/active":
					$scope.isCompleted = { completed:false };
					break;
				case "/completed":
					$scope.isCompleted = { completed:true };
					break;
				default:
					$scope.isCompleted = {};
					break;
			}
		} );
	} ] );

})(window);
