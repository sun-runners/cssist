'use strict';

angular.module("idistApp")
	.directive("textDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{
				text:"=text"
			},
			restrict:"EA",
			templateUrl: 'views/directive/textDir.html'
		};
	});
