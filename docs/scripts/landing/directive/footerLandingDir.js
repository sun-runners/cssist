'use strict';

angular.module("idistApp")
	.directive("footerLandingDir", function () {
		return {
			link: function (scope, element, attrs) {
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/directive/footerLandingDir.html'
		};
	});
