'use strict';

angular.module('app')
  .controller('DemoCtrl', function($scope, $rootScope, $timeout) {

    // Move Function Section
    $scope.movePrev = function() {
      $.fn.fullpage.moveSlideLeft();
    };

    $scope.moveNext = function() {
      $.fn.fullpage.moveSlideRight();
    };

    // On Function Section
    $scope.onStart = function() {
      $scope.process_title = 'Starting';
    };

    $scope.onChange = function(colorDetails) {
      $scope.$apply(function(){
        $scope.process_title = 'Changing';
        $scope.process_content = 'from ( ' + colorDetails.colorsFrom[0] +', '+ colorDetails.colorsFrom[1]+' ) to ( '+colorDetails.colorsTo[0]+', '+colorDetails.colorsTo[1]+' )';
      });
    };

    $scope.onEnd = function() {
      $scope.process_title = 'Ending';
    };

  });
