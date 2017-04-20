

angular.module('musicApp.directives')

.directive('musicInfoBox', ['linkData', function(linkData){
    function link(scope, element){
        scope.spanInformation = function(){
            linkData.selectedAlbum.info = {title: 'In Paradisum'};
        }
    }
    return {
        link: link,
        scope: {
            information: '='   // Information about the single or the artist or the album to model.
        },
        templateUrl: 'directives/templates/infoBoxTemplate.html'
    }
}]
)
;
