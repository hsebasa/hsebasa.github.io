'use strict';

angular.module('musicApp.Pages', ['ngRoute'])

.controller('albumPageCtrl', ['$scope', 'linkData', function($scope, linkData) {
    $scope.selectedAlbum = linkData.selectedItem;
}]
);
