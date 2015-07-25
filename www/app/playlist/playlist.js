'use strict'

angular.module('starter')

.config(function($stateProvider) {
  $stateProvider.state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'app/playlist/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
})

.controller('PlaylistCtrl', function($scope) {
});
