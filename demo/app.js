'use strict';

angular.module('app', [
    'ui.router',
    'ngAria',
    'ngResource',
    'fullPage.js',
    'ngGradient',
    'ngAction',
    'ngLodash'
  ]).run(function($rootScope, $timeout, $state, lodash){

  $rootScope.window = window;
  $rootScope.$state = $state;
  $rootScope._ = lodash;
});
