'use strict';

angular.module("idistApp")
	.directive("mainLandingDir", function () {
		return {
			link: function (scope, element, attrs) {
			},
			replace: true,
			scope: false,
			restrict:"EA",
			templateUrl: 'views/landing/directive/mainLandingDir.html'
		};
	});
