'use strict';

angular.module("idistApp")
	.directive("navigatorDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/directive/navigatorDir.html'
		};
	});
