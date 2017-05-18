'use strict';

angular.module("idistApp")
	.service('storageS', function($rootScope, $http){
		this.get = function(key){
      if(!key) return;
			var data = null;
			try{
				if(localStorage.getItem(key)){
					data = angular.fromJson(localStorage.getItem(key));
				}
			} catch(e){ localStorage.removeItem(key) }
			return data;
		};
		this.set = function(key, value){
			if(key=='token') $http.defaults.headers.common['Authorization'] = "Token " + value;
			localStorage.setItem(key, JSON.stringify(value));
		};
		this.delete = function(key){
			if(key=='token') delete $http.defaults.headers.common["Authorization"];
			localStorage.removeItem(key);
		};
		this.remove = function(key){
			localStorage.removeItem(key);
		};
	});
