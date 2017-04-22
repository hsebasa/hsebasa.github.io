angular.module('musicApp.resources', [])

.factory('globalData',  ['$http',  function($http){
    return {

        url_api : 'https://api.spotify.com',
        url_token : 'https://accounts.spotify.com/api/token',
        client_id : 'c9557aed41e6498f959c37e99a986da5',
        client_key : '28c47f8c14a74d70ae3133bc928fd020',

        request: function (endpoint, method, data, headers, callback, progressHandler) {

            var self = this;

            $http({
                url: endpoint,
                method: method ? method : 'GET',
                data: data,
                headers: headers,
                withCredentials: false,
                eventHandlers: {
                    progress: progressHandler
                }
            }).then(function (response) {
                    console.log(callback);
                    callback.call(response);
                }, function(response) {
                    console.log("Something went wrong");
             });

        },
            
        get_album_by_name : function (album_name, callback, progressHandler) {
            new_name = encodeURI(album_name, "UTF-8");
            url = this.url_api + '/v1/search?q=' + new_name +'&type=album';
            this.request(url, 'GET', {}, {}, callback, progressHandler);
        },

        get_album_by_id : function (album_id, callback, progressHandler) {
            new_name = encodeURI(album_id, "UTF-8");
            url = this.url_api + '/v1/albums/' + new_name;
            this.request(url, 'GET', {}, {}, callback, progressHandler);
        },

        get_artist_by_name : function (artist_name, callback, progressHandler) {
            new_name = encodeURI(artist_name, "UTF-8");
            url = this.url_api + '/v1/search?q=' + new_name +'&type=artist';
            this.request(url, 'GET', {}, {}, callback, progressHandler);
        },

        get_artist_by_id : function (artist_id, callback, progressHandler) {
            new_name = encodeURI(artist_id, "UTF-8");
            url = this.url_api + '/v1/artists/' + new_name;
            this.request(url, 'GET', {}, {}, callback, progressHandler);
        },

        get_playlist_by_name : function (playlist_name, callback, progressHandler) {
            new_name = encodeURI(playlist_name, "UTF-8");
            url = this.url_api + '/v1/search?q=' + new_name +'&type=playlist';
            this.request(url, 'GET', {}, {}, callback, progressHandler);
        },

        get_track_by_name : function (track_name, callback, progressHandler) {
            new_name= encodeURI(track_name, "UTF-8");
            url = this.url_api + '/v1/search?q=' + new_name +'&type=track';
            this.request(url, 'GET', {}, {}, callback, progressHandler);
        },

        get_track_by_id : function (track_id, callback, progressHandler) {
            new_name= encodeURI(track_id, "UTF-8");
            url = this.url_api + '/v1/tracks/' + new_name;
            this.request(url, 'GET', {}, {}, callback, progressHandler);
        },

        get_tracks_by_album : function (album_id, callback, progressHandler) {
            new_name= encodeURI(album_id, "UTF-8");
            url = this.url_api + '/v1/albums/' + new_name + '/tracks';
            this.request(url, 'GET', {}, {}, callback, progressHandler);
        },

        get_albums_by_artist : function (artist_id, callback, progressHandler) {
            new_name = encodeURI(artist_id, "UTF-8");
            url = this.url_api + '/v1/artists/' + new_name + '/albums';
            this.request(url, 'GET', {}, {}, callback, progressHandler);
        },

        get_top_tracks_by_artist : function (artist_id, callback, progressHandler) {
            new_name = encodeURI(artist_id, "UTF-8");
            url = this.url_api + '/v1/artists/' + new_name + '/top-tracks';
            this.request(url, 'GET', {}, {}, callback, progressHandler);
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
            this.json_data = {};

            this.call = function (response){
                if (response.status == 200) {
                    this.json_data = response.data['tracks'].items;
                }else{
                    console.log('Ha ocurrido algun error, status: ' + response_status)
                }
            }

        },

        artists_info: new function artists() {

            this.json_data = {};

            this.call = function (response){
                if (response.status == 200) {
                    this.json_data = response.data['artists'].items;
                }else{
                    console.log('Ha ocurrido algun error, status: ' + response_status)
                }
            };
            
        },

        playlists_info: new function playlists() {

            this.json_data = {};

            this.call = function (response){
                if (response.status == 200) {
                    this.json_data = response.data['playlists'].items;
                }else{
                    console.log('Ha ocurrido algun error, status: ' + response_status)
                }
            }

        },


        search_item : function(item, progressHandler){
            var self  =  this;

            if (item == null){
                return ;
            }

            if (item.length == 0){
                return ;
            }
            
            this.get_album_by_name(item, this.albums_info, progressHandler);
            this.get_artist_by_name(item, this.artists_info, progressHandler);
            this.get_track_by_name(item, this.tracks_info, progressHandler);

            console.log({'albums': self.albums_info,
                'artists': self.artists_info,
                'tracks': self.tracks_info});

            this.results = {'albums': self.albums_info,
                            'artists': self.artists_info,
                            'tracks': self.tracks_info}
        },
        results: {'albums': [],
                  'artists': [],
                  'tracks': []}
    }
}]);