angular.module('musicApp.resources', [])

.factory('globalData',  ['$http',  function($http){
    return {

        url_api : 'https://api.spotify.com',
        url_token : 'https://accounts.spotify.com/api/token',
        client_id : 'c9557aed41e6498f959c37e99a986da5',
        client_key : '28c47f8c14a74d70ae3133bc928fd020',

        request: function (endpoint, method, data, headers, callback) {


            $http({
                url: endpoint,
                method: method ? method : 'GET',
                data: data,
                headers: headers,
                withCredentials: false
            }).then(function (response) {
                    console.log(response.data);
                    console.log('adadadad' + callback);
                    callback(response);
                }, function(response) {
                    console.log("algo salio mal");
             });


        },
            
        get_album_by_name : function (album_name, callback) {
            new_url = encodeURI(album_name, "UTF-8");
            url = this.url_api + '/v1/search?q=' + new_url +'&type=album';
            this.request(url, 'GET', {}, {}, callback);
        },

        get_artist_by_name : function (album_name, callback) {
            new_url = encodeURI(album_name, "UTF-8");
            url = this.url_api + '/v1/search?q=' + new_url +'&type=artist';
            this.request(url, 'GET', {}, {}, callback);
        },

        get_playlist_by_name : function (album_name, callback) {
            new_url = encodeURI(album_name, "UTF-8");
            url = this.url_api + '/v1/search?q=' + new_url +'&type=playlist';
            this.request(url, 'GET', {}, {}, callback);
        },

        get_track_by_name : function (album_name, callback) {
            new_url= encodeURI(album_name, "UTF-8");
            url = this.url_api + '/v1/search?q=' + new_url +'&type=track';
            this.request(url, 'GET', {}, {}, callback);
        },

        album_info: function (response) {
            json_data = response.data

        }


    }
}]);