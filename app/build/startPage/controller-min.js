"use strict";angular.module("musicApp.startPage",["ngRoute"]).config(["$routeProvider",function(t){t.when("/start",{templateUrl:"startPage/startPage.html"})}]).controller("startPageCtrl",["globalData","$mdDialog","$http","$scope","$timeout","$scope",function(t,e,s,o,a,i){var r=this;r.spotifyApi=t,r.searchText="",r.progress=0,r.firstSearch=!1,r.setAllDefault=function(){this.spotifyApi.offsetArtists=0,this.spotifyApi.offsetAlbums=0,this.spotifyApi.offsetTracks=0},r.States={noSearch:"noSearch",noResults:"noResults",searching:"searching",showingResults:"showingResults"},r.state=r.States.noSearch,r.nextPage=function(e){var s="offset"+e;this.spotifyApi[s]+=this.spotifyApi.limitSearch,t.search_item(r.searchText,r.progressUpdate,r.finishedSearch)},r.previousPage=function(e){var s="offset"+e;this.spotifyApi[s]-=this.spotifyApi.limitSearch,t.search_item(r.searchText,r.progressUpdate,r.finishedSearch)},r.disableNextPage=function(t){var e=t.toLowerCase();return!(this.spotifyApi.results[e].json_data.length>0&&this.spotifyApi.results[e].json_data.length==this.spotifyApi.limitSearch)},r.disablePreviousPage=function(t){var e="offset"+t;return this.spotifyApi[e]-this.spotifyApi.limitSearch<0},r.progressUpdate=function(t){r.progress=100*t.loaded/t.total},r.search=function(){r.setAllDefault(),r.state=r.States.searching,r.firstSearch=!0,$("html,body").animate({scrollTop:$("#results").offset().top},"slow"),t.search_item(r.searchText,r.progressUpdate,r.finishedSearch)},r.finishedSearch=function(t){console.log(t.artists),console.log("asdasdasda"),console.log(r.spotifyApi.results.artists.json_data.length),Object.keys(t.artists).length>0||Object.keys(t.albums).length>0||Object.keys(t.tracks).length>0?r.state=r.States.showingResults:r.state=r.States.noResults},r.focus=function(){document.getElementById("searchBarInput").focus()},r.pressedKey=function(t){13===t.which&&r.search()},o.showView=function(t,s){var a={selectedItem:t,selectedItemInfo:new function(){this.data={},this.call=function(t){200==t.status?this.data=t.data:console.log("Ha ocurrido algun error, status: "+response_status)}},percentLoaded:0},i=o.$new(!0);"artist"==s?(r.spotifyApi.get_albums_by_artist(t.id,a.selectedItemInfo,r.progressUpdate),i.get_traks_album=function(t){var s={selectedItem:t,selectedItemInfo:new function(){this.data={},this.call=function(t){200==t.status?this.data=t.data:console.log("Ha ocurrido algun error, status: "+response_status)}},percentLoaded:0},a=o.$new(!0);a.info=s,console.log("entreeee"),console.log(r),r.spotifyApi.get_album_by_id(t.id,s.selectedItemInfo,r.progressUpdate),e.show({clickOutsideToClose:!0,scope:a,preserveScope:!1,plain:!0,templateUrl:"templates/albumPage.html"})}):"album"==s&&r.spotifyApi.get_album_by_id(t.id,a.selectedItemInfo,r.progressUpdate),i.info=a,console.log("templates/"+s+"Page.html"),e.show({clickOutsideToClose:!0,scope:i,preserveScope:!1,plain:!0,templateUrl:"templates/"+s+"Page.html"})}}]);