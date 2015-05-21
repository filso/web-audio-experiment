'use strict';

angular.module('webAudioExperiment').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/develop');
  $urlRouterProvider.when('', 'develop');
  $stateProvider
    .state('develop', {
      url: '/develop',
      templateUrl: 'app/components/develop/develop.html'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'app/components/main/main.html'
    });
});
