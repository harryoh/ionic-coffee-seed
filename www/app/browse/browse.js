'use strict'

angular.module('starter')

.config(function($stateProvider) {
  $stateProvider.state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'app/browse/browse.html'
      }
    }
  });
})
