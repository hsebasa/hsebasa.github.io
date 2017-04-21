'use strict';

angular.module('musicApp.startPage', ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {

    $routeProvider.when('/start', {
        templateUrl: 'startPage/startPage.html'
    });

}])
.controller('startPageCtrl', ['globalData', '$mdDialog', '$http', '$scope', function(globalData, $mdDialog, $http, $scope) {

    var self = this;
    $scope.selectedItem = null;

    $scope.showView = function (selectedItem, type){
        $scope.selectedItem = selectedItem;
        $mdDialog.show({
                clickOutsideToClose: true,

                scope: $scope,        // use parent scope in template
                preserveScope: true,  // do not forget this if use parent scope

                templateUrl: '../' + type + 'Page/' + type + 'Page.html'
            }
        )

    }

}]
);
