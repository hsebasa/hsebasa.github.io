'use strict';

angular.module('musicApp.Pages', ['ngRoute'])

.controller('trackPageCtrl', ['$scope', 'linkData', function($scope, linkData) {
    $scope.selectedTrack = linkData.selectedItem;
}]
);
