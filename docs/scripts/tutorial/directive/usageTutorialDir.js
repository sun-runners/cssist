'use strict';

angular.module("idistApp")
	.directive("usageTutorialDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{},
			restrict:"EA",
			templateUrl: 'views/tutorial/directive/usageTutorialDir.html'
		};
	});
