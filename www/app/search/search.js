'use strict'

angular.module('starter')

.config(function($stateProvider) {
  $stateProvider.state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'app/search/search.html'
      }
    }
  });
})
