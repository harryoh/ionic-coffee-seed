'use strict'

angular.module('starter')

.config(function($stateProvider) {
  $stateProvider.state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'app/playlists/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
});
