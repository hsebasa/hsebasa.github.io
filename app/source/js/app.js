'use strict';

// Declare app level module which depends on views, and components
angular.module('musicApp', [
  'ngRoute',
  'musicApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
}]);