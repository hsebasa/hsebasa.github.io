'use strict';

angular.module('musicApp.Pages', ['ngRoute'])

.controller('artistPageCtrl', ['$scope', 'linkData', function($scope, linkData) {
    $scope.selectedArtist = linkData.selectedItem;
}]
);
