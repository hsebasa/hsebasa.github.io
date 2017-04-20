

angular.module('musicApp.directives')

.directive('musicInfoBox', ['linkData', function(linkData){
    function link(scope, element){
        scope.spanInformation = function(){
            linkData.selectedItem.info = {title: 'In Paradisum', type: 'album'};
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
