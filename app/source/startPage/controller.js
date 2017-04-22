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
        $('html,body').animate({
                scrollTop: $("#results").offset().top},
            'slow');
        globalData.search_item(self.searchText, self.progressUpdate);
    };

    self.focus = function() {
        document.getElementById('searchBarInput').focus();
    };

    self.pressedKey = function(keyEvent){
        if (keyEvent.which === 13){
            self.search();
        }
    };

    $scope.showView = function (selectedItem, type){
        var info = {
            selectedItem: selectedItem,
            selectedItemInfo: new function(){this.data={}; this.call=function(response){if (response.status == 200) {
                this.data = response.data;
            }else{
                console.log('Ha ocurrido algun error, status: ' + response_status)
            }}},
            percentLoaded: 0
        };
        var newScope = $scope.$new(true);
        console.log(selectedItem.id);

        if (type == 'artist'){
            self.spotifyApi.get_albums_by_artist(selectedItem.id, info.selectedItemInfo, self.progressUpdate)

        }


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
