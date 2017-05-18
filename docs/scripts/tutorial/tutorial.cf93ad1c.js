'use strict';

angular.module('idistApp')
  .controller('TutorialCtrl', function ($scope, $rootScope, ParagraphR) {

    // Load Function Section
    $scope.load = function(){
      // ParagraphR.get({}, function(ParagraphResponse){
      //   $scope.paragraphs = angular.copy(ParagraphResponse.results);
      // });

      $scope.paragraphs = [
        { title_kr:'소개', title_en:'introduction' },
        { title_kr:'설치', title_en:'introduction' },
        { title_kr:'사용', title_en:'introduction' }
      ];
    };

    // Initialize Function Section
    $scope.initialize = function(){
      $scope.load();
    };
    $scope.initialize();
  });
