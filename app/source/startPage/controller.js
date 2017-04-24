'use strict';

angular.module('musicApp.startPage', ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {

    $routeProvider.when('/start', {
        templateUrl: 'startPage/startPage.html'
    });

}])
.controller('startPageCtrl', ['globalData', '$mdDialog', '$http', '$scope', '$timeout', '$scope', function(globalData, $mdDialog, $http, $scope, $timeout, $window) {
    var self = this;

    self.spotifyApi = globalData;
    self.searchText = "";
    self.progress = 0;
    self.firstSearch = false;


    self.States = {
        noSearch: 'noSearch',
        noResults: 'noResults',
        searching: 'searching',
        showingResults: 'showingResults'
    };
    self.state = self.States.noSearch;

    self.progressUpdate = function(progress){
        self.progress = 100.0 * progress.loaded / progress.total;
    };
    self.search = function(){
        self.state = self.States.searching;
        self.firstSearch = true;
        $('html,body').animate(
            {
                scrollTop: $("#results").offset().top
            },
        'slow');
        globalData.search_item(self.searchText, self.progressUpdate, self.finishedSearch);
    };

    self.finishedSearch = function(results){
        if ((Object.keys(results.artists).length > 0) || (Object.keys(results.albums).length > 0) || (Object.keys(results.tracks).length > 0)){
            self.state = self.States.showingResults;
        } else {
            self.state = self.States.noResults;
        }
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

        if (type == 'artist'){
            self.spotifyApi.get_albums_by_artist(selectedItem.id, info.selectedItemInfo, self.progressUpdate);

            newScope.get_traks_album =  function (album) {

                var album_info = {
                                    selectedItem: album,
                                    selectedItemInfo: new function(){this.data={}; this.call=function(response){if (response.status == 200) {
                                        this.data = response.data;
                                    }else{
                                        console.log('Ha ocurrido algun error, status: ' + response_status)
                                    }}},
                                    percentLoaded: 0
                                };

                var trackScope = $scope.$new(true);

                trackScope.info = album_info;

                console.log('entreeee');
                console.log(self);
                self.spotifyApi.get_tracks_by_album(album.id, album_info.selectedItemInfo, self.progressUpdate);

                $mdDialog.show({clickOutsideToClose: true,
                                scope: trackScope,        // use parent scope in template
                                preserveScope: false,
                                plain: true,
                                templateUrl: 'templates/' + 'album' + 'Page.html'
                                });
            }
        } else if (type == 'album'){
            self.spotifyApi.get_tracks_by_album(selectedItem.id, info.selectedItemInfo, self.progressUpdate);
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
