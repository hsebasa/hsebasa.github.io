'use strict';

angular.module('musicApp.albumPage', ['ngRoute'])

.controller('albumPageCtrl', ['$scope', 'linkData', function($scope, linkData) {
    this.print = function(){
        console.log($scope.selectedAlbum, linkData['selectedAlbum'])
    };
    $scope.selectedAlbum = linkData.selectedAlbum;
}]
);
