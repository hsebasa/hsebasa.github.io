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
                    console.log(callback);
                    callback.call(response);
                }, function(response) {
                    console.log("algo salio mal");
             });


        },
            
        get_album_by_name : function (album_name, callback) {
            console.log(this);
            console.log('asd1231231231 ' + this.url_token);
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


        albums_info: new function albums() {

            this.json_data = {};

            this.call = function (response){
                if (response.status == 200) {
                    this.json_data = response.data['albums'].items;
                }else{
                    console.log('Ha ocurrido algun error, status: ' + response_status)
                }
            }

        },

        tracks_info: new function tracks() {
            json_data = {};

            this.call = function (response){
                if (response.status == 200) {
                    this.json_data = response.data['tracks'].items;
                }else{
                    console.log('Ha ocurrido algun error, status: ' + response_status)
                }
            }

        },

        artists_info: new function artists() {

            json_data = {};

            this.call = function (response){
                if (response.status == 200) {
                    this.json_data = response.data['artists'].items;
                }else{
                    console.log('Ha ocurrido algun error, status: ' + response_status)
                }
            }

        },

        playlists_info: new function playlists() {

            json_data = {};

            this.call = function (response){
                if (response.status == 200) {
                    this.json_data = response.data['playlists'].items;
                }else{
                    console.log('Ha ocurrido algun error, status: ' + response_status)
                }
            }

        },

        search_item : function(item){
            console.log('xxx'  + this.url_api);

            var self  =  this;

            if (item.length == 0){
                this.results = {'albums': null,
                    'artists': null,
                    'track': null}
            }
            
            this.get_album_by_name(item, this.albums_info);
            this.get_artist_by_name(item, this.artists_info);
            this.get_track_by_name(item, this.tracks_info)

            this.results =  {'albums': self.albums_info,
                            'artists': self.artists_info,
                            'track': self.tracks_info}
        }



    }
}]);