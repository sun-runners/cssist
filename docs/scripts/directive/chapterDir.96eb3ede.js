'use strict';

angular.module("idistApp")
	.directive("chapterDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{
				chapter:"=chapter"
			},
			restrict:"EA",
			templateUrl: 'views/directive/chapterDir.html'
		};
	});
