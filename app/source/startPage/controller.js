'use strict';

angular.module('musicApp.startPage', ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {

    $routeProvider.when('/start', {
        templateUrl: 'startPage/startPage.html'
    });

}])
.controller('startPageCtrl', ['globalData', '$mdDialog', '$http', '$scope', '$timeout', function(globalData, $mdDialog, $http, $scope, $timeout) {
    var self = this;
    $scope.itemsInformation = [
        {
            'title': 'Juancho'
        },
        {
            'title': 'Perez'
        }
    ];

    $scope.showView = function (selectedItem, type){
        var info = {
            selectedItem: selectedItem,
            selectedItemInfo: null,
            percentLoaded: 0
        };
        var newScope = $scope.$new(true);
        newScope.info = info;
        $mdDialog.show({
                clickOutsideToClose: true,
                scope: newScope,        // use parent scope in template
                preserveScope: false,
                plain: true,
                templateUrl: 'templates/' + type + 'Page.html'
            }
        )

    }

}]
);
