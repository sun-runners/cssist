'use strict';

angular.module("app")
	.directive("contentDir", function () {
		return {
			link: function (scope, element, attrs) {
			},
			replace: 'element',
      transclude: true,
			scope:{
        title:"=title",
        description:"=description"
      },
			restrict:"EA",
			templateUrl: 'demo/views/contentDir.html'
		};
	});
