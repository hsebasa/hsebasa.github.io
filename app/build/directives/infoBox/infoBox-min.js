angular.module("musicApp.directives").directive("musicInfoBox",["linkData",function(e){function t(t,i){t.spanInformation=function(){e.selectedItem.info={title:"In Paradisum",type:"album"}}}return{link:t,scope:{information:"="},templateUrl:"directives/templates/infoBoxTemplate.html"}}]);