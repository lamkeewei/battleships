'use strict';

angular.module('frontendApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.codemirror',
  'LocalStorageModule',
  'ui.bootstrap',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          allBots: ['Bot', function(Bot){
            return Bot.getAllBots();
          }],
          percentileBots: ['Bot', function(Bot){
            return Bot.getChallengeBots();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('battleships');
  }])
  .factory('ga', function(){
    return window.ga;
  })
  .factory('Firebase', function(){
    return window.Firebase;
  });
