angular.module("musicApp.directives").directive("adjustImage",[function(){return{scope:{width:"@",height:"@",imageProperties:"=",defaultImage:"="},link:function(e){e.pf=parseFloat,e.imageProperties?e.image2Draw=e.imageProperties:e.image2Draw=e.defaultImage},templateUrl:"templates/imageAdjust.html"}}]);