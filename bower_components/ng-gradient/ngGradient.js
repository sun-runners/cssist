(function(angular) {
  angular.module('ngGradient', ['ng'])
    .directive("ngGradient", function($rootScope) {
      return {
        link: function(scope, element, attrs) {

          // Set Function Section
          scope.setGradient = function() {
            if (!scope.option) return;
            scope.option.element = element[0];
            if (scope.onStart) scope.option.onStart = scope.onStart;
            if (scope.onChange) scope.option.onGradientChange = scope.onChange;
            if (scope.onEnd) scope.option.onEnd = scope.onEnd;
            var granimInstance = new Granim(scope.option);
            if (attrs.ngGradientInstance) scope.instance = granimInstance;
          };

          // Initialize Function Section
          scope.initialize = function() {
            scope.setGradient();
          };

          scope.initialize();
        },
        scope: {
          option: "=ngGradientOption",
          instance: "=ngGradientInstance",
          onStart: "=onStart",
          onChange: "=onChange",
          onEnd: "=onEnd"
        },
        replace: true,
        restrict: "E",
        template: '<canvas></canvas>'
      };
    });
})(angular);
