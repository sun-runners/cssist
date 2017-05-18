'use strict';

angular.module("idistApp")
	.directive("sidemenuDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{
        chapters:"=chapters"
      },
			restrict:"EA",
			templateUrl: 'views/directive/sidemenuDir.html'
		};
	});
