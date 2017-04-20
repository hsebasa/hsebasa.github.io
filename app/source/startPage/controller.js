'use strict';

angular.module('musicApp.startPage', ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {

    $routeProvider.when('/start', {
        templateUrl: 'startPage/startPage.html'
    });

}])
.controller('startPageCtrl', ['globalData', '$http' , '$scope', function(globalData, $http, $scope) {

.controller('startPageCtrl', ['linkData', function(linkData) {
    var self = this;
    self.selectedItem = linkData.selectedItem;
}]
);
