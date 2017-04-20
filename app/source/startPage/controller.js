'use strict';

angular.module('musicApp.startPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/start', {
        templateUrl: 'startPage/startPage.html',
        controller: 'startPageCtrl'
    });
}])

.controller('startPageCtrl', [function() {

}]
);
