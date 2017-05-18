'use strict';

angular.module("idistApp")
	.directive("codeDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{
				code:"=code"
			},
			restrict:"EA",
			templateUrl: 'views/directive/codeDir.html'
		};
	});
