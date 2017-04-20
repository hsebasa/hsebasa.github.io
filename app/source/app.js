'use strict';

// Declare app level module which depends on views, and components
angular.module('musicApp', [
    'ngRoute',
    'musicApp.version',
    'musicApp.startPage',
    'musicApp.directives',
    'musicApp.albumPage'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({redirectTo: '/start'});
}])
.factory('linkData', [function(){
    var data = {
        selectedAlbum: {
            info: {}
        }
    };
    return {
        selectedAlbum: {
            info: null
        }
    }
}]
);
