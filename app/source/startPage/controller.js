
angular.module('musicApp.startPage', ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {

    $routeProvider.when('/start', {
        templateUrl: 'startPage/startPage.html',
        controller: 'startPageCtrl'

    });

}])
.controller('startPageCtrl', ['globalData', '$http' , '$scope', function(globalData, $http, $scope) {

        spitify_api = globalData;
        var self = this;
        self.albums = null;
        self.artists = null;
        spitify_api.get_album_by_name('room on fire', function (response) {

            console.log(response.data);
            self.albums = response;

        });


        spitify_api.get_artist_by_name('the strokes', function (response) {

            console.log(response.data);
            self.artists = response;

        });


}]
);
