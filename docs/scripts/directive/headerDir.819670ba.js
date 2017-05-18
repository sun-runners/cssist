'use strict';

angular.module("idistApp")
  .directive("headerDir", function($rootScope) {
    return {
      link: function(scope, element, attrs, $window) {

        // Go Function Section
        scope.goMenu = function(menu, $event) {
          if (menu.me && !$rootScope.user) {
            $rootScope.stateS.go('sign/in', menu.params, $event);
          } else {
            $rootScope.stateS.go(menu.state, menu.params, $event);
          }
        };

        // Initialize Function Section
        scope.initialize = function() {
          scope.menus = [{
              state: 'home',
              title: '튜토리얼',
              icon: 'ion-ios-book'
            },
            {
              state: 'document',
              title: '도큐먼트',
              icon: 'ion-document-text'
            }
          ];
        };

        // Watch Section
        $rootScope.$watch('user', function(){
          scope.initialize();
        });

        var win = angular.element($window);
        scope.$watch(function() {
          return element[0].offsetHeight;
        }, function(newValue, oldValue) {
          if (!$rootScope.heights) $rootScope.heights = {};
          $rootScope.heights.header = element[0].offsetHeight;
          if ($rootScope.state.current.group == 'landing') {
            $rootScope.heights.header = 0;
          } else {
            $rootScope.heights.header = element[0].offsetHeight;
          }
        });
        win.bind('resize', function() {
          scope.$apply();
        });
      },
      replace: true,
      scope: {},
      restrict: "EA",
      templateUrl: 'views/directive/headerDir.html'
    };
  });
