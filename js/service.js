( function(angular){
	//1.创建模块
	var app = angular.module( "service" , []);
	app.service( "myService",[ "$window",function($window){
		var str = $window.localStorage.getItem("local") || "[]";
		var todos = JSON.parse(str);
		//1.渲染数据
		this.get = function(){
			return todos;
		};
		//2.添加数据
		this.add = function(newTodo){
			todos.push({
				id:todos.length+1,
				name:newTodo,
				completed:false,
			});
			this.save();
		};
		//3.删除数据
		this.remove = function(id){
			for(var i=0; i<todos.length; i++){
				var item = todos[i];
				if( item.id === id ){
					todos.splice(i,1);
				}
			}
			this.save();
		}
		//6.批量修改状态显示
		this.toggleAll = function(selected){
			for(var i=0; i<todos.length; i++){
				var item = todos[i];
				item.completed = selected;
			}
		};
		//7.未完成数据数量
		this.amount = function(){
			var count = 0;
			for(var i=0; i<todos.length; i++){
				var item = todos[i];
				if(!item.completed){
					count++;
				}
			}
			return count;
		};
		//8.清除已完成数据
		this.recomplete = function(){
			for(var i=todos.length-1; i>=0; i--){
				var item = todos[i];
				if(item.completed){
					todos.splice(i,1);
				}
			}
			this.save();
		};
		//保存数据到本地存储
		this.save = function(){
		var str = JSON.stringify(todos);
		$window.localStorage.setItem("local",str);
		};
	} ] );
} )(angular);