'use strict';

angular.module("idistApp")
	.directive("tableDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{},
			restrict:"EA",
			templateUrl: 'views/directive/tableDir.html'
		};
	});
