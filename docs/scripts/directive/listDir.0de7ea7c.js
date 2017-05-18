'use strict';

angular.module("idistApp")
	.directive("listDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{
				list:"=list"
			},
			restrict:"EA",
			templateUrl: 'views/directive/listDir.html'
		};
	});
