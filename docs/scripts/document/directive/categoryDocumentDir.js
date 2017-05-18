'use strict';

angular.module("idistApp")
	.directive("categoryDocumentDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{},
			restrict:"EA",
			templateUrl: 'views/document/directive/categoryDocumentDir.html'
		};
	});
