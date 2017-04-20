'use strict';

angular.module('musicApp.startPage', ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {

    $routeProvider.when('/start', {
        templateUrl: 'startPage/startPage.html'
    });

}])
.controller('startPageCtrl', ['globalData', '$http' , 'linkData', '$scope', function(globalData, $http, linkData, $scope) {

    var self = this;
    self.selectedItem = linkData.selectedItem;


}]
);
