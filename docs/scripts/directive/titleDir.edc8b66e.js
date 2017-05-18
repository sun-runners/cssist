'use strict';

angular.module("idistApp")
	.directive("titleDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{
				title:"=title"
			},
			restrict:"EA",
			templateUrl: 'views/directive/titleDir.html'
		};
	});
