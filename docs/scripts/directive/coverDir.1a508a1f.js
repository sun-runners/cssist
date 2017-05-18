'use strict';

angular.module("idistApp")
	.directive("coverDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{},
			restrict:"EA",
			templateUrl: 'views/directive/coverDir.html'
		};
	});
