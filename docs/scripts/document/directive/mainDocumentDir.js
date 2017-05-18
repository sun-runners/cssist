'use strict';

angular.module("idistApp")
	.directive("mainDocumentDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

			},
			replace: true,
			scope:{},
			restrict:"EA",
			templateUrl: 'views/document/directive/mainDocumentDir.html'
		};
	});
