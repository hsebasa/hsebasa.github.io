"use strict";angular.module("musicApp",["ngRoute","musicApp.version","musicApp.startPage","musicApp.directives","musicApp.albumPage"]).config(["$locationProvider","$routeProvider",function(e,i){e.hashPrefix(""),i.otherwise({redirectTo:"/start"})}]).factory("linkData",[function(){return{selectedAlbum:{info:null}}}]);