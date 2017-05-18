'use strict';

angular.module("idistApp")
	.directive("paragraphDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{
        paragraph:"=paragraph"
      },
			restrict:"EA",
			templateUrl: 'views/directive/paragraphDir.html'
		};
	});
