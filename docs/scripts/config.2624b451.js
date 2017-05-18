'use strict';

angular.module('idistApp')
  .config(function ($resourceProvider, $stateProvider, $urlRouterProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $stateProvider

      // LANDING
      .state('landing', { url: '/landing', templateUrl: 'views/landing/landing.html', controller: 'LandingCtrl', group: 'landing' })

      // TUTORIAL
      .state('home', { url: '/tutorial', templateUrl: 'views/tutorial/tutorial.html', controller: 'TutorialCtrl' })

      // DOCUMENT
      .state('document', { url: '/document', templateUrl: 'views/document/document.html', controller: 'DocumentCtrl' });

    $urlRouterProvider.otherwise('/landing');

  });
