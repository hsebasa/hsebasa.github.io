

angular.module('musicApp.directives')

.directive('musicInfoBox', [function(){
    function link(scope, element){
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
