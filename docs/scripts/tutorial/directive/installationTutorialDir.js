'use strict';

angular.module("idistApp")
	.directive("installationTutorialDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{},
			restrict:"EA",
			templateUrl: 'views/tutorial/directive/installationTutorialDir.html'
		};
	});
