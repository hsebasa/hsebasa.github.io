'use strict';

angular.module('musicApp.startPage', ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {

    $routeProvider.when('/start', {
        templateUrl: 'startPage/startPage.html'
    });

}])
.controller('startPageCtrl', ['globalData', '$mdDialog', '$http', '$scope', '$timeout', function(globalData, $mdDialog, $http, $scope, $timeout) {
    var self = this;
    self.spotifyApi = globalData;
    self.searchText = null;
    self.progress = 0;
    self.progressUpdate = function(progress){
        self.progress = 100.0 * progress.loaded / progress.total;
    };
    self.search = function(){
        globalData.search_item(self.searchText, self.progressUpdate);
    };

    $scope.showView = function (selectedItem, type){
        var info = {
            selectedItem: selectedItem,
            selectedItemInfo: null,
            percentLoaded: 0
        };
        var newScope = $scope.$new(true);
        newScope.info = info;
        console.log('templates/' + type + 'Page.html');
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
