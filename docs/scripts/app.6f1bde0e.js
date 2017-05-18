'use strict';

/**
 * @ngdoc overview
 * @name idistApp
 * @description
 * # idistApp
 *
 * Main module of the application.
 */
angular
  .module('idistApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angular-carousel',
    'ngLodash',
    'angular.filter'
  ])
  .run(function($rootScope, $state, $resource, $q, lodash, stateS, storageS, TokenSignInR) {

    $rootScope._ = lodash;
    $rootScope.state = $state;
    $rootScope.stateS = stateS;

    if (storageS.get('is_auto_login')) {
      $rootScope.user = storageS.get('user');
    } else {
      $rootScope.user = null;
    }

    // What Function Section
    $rootScope.what = function(obj) {
    };

    $rootScope.responseMessage = function(response, success_alert) {
      if (success_alert && response.success) {
        alert(response.success);
      }
      if (response.fail) {
        alert(response.fail);
      }
    };

    // Initialze Function Section
    $rootScope.initialize = function() {
      // $resource('json/idist.json').get({}, function(service) {
      // $resource('json/classist.json').get({},function(service){
      // $resource('json/codist.json').get({},function(service){
      $resource('json/cssist.json').get({},function(service){
      // $resource('json/flowist.json').get({},function(service){
      // $resource('json/planist.json').get({},function(service){
      // $resource('json/marketist.json').get({},function(service){
        $rootScope.service = service;
      });
      $resource('json/services.json').query({}, function(services) {
        $rootScope.services = services;
      });
      // if ($window.IMP) {
      //   var IMP = $window.IMP; // 생략가능
      //   IMP.init('imp58968105');
      // } else {
      //   alert('다른 브라우저를 사용해주세요');
      // }
      if (storageS.get('is_auto_login') && storageS.get('token')) {
        TokenSignInR.save({
          token: storageS.get('token')
        }, function(TokenSignInResponse) {
          $rootScope.user = TokenSignInResponse.user;
          storageS.set('token', TokenSignInResponse.token.key);
        });
      }
    };
    $rootScope.initialize();

    $rootScope.$watch('user', function(newValue, oldValue) {
      if (newValue !== oldValue) {
        storageS.set('user', $rootScope.user);
      }
    });

  }).directive('krInput', ['$parse', function($parse) {
    return {
      priority: 2,
      restrict: 'A',
      compile: function(element) {
        element.on('compositionstart', function(e) {
          e.stopImmediatePropagation();
        });
      },
    };
  }]);
