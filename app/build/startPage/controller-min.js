"use strict";angular.module("musicApp.startPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/start",{templateUrl:"startPage/startPage.html"})}]).controller("startPageCtrl",["globalData","$mdDialog","$http","$scope","$timeout",function(e,t,o,s,a){var r=this;r.spotifyApi=e,r.searchText=null,r.progress=0,r.progressUpdate=function(e){r.progress=100*e.loaded/e.total},r.search=function(){e.search_item(r.searchText,r.progressUpdate)},s.showView=function(e,o){var a={selectedItem:e,selectedItemInfo:null,percentLoaded:0},r=s.$new(!0);r.info=a,console.log("templates/"+o+"Page.html"),t.show({clickOutsideToClose:!0,scope:r,preserveScope:!1,plain:!0,templateUrl:"templates/"+o+"Page.html"})}}]);