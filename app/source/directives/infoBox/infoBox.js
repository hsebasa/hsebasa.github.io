

angular.module('musicApp.directives')

.directive('musicInfoBox', [function(){
    function link(scope, element){
        scope.spanInformation = function(){
            scope.setSelectedItem({itemInfo: {title: 'In Paradisum'}, type: 'artist'});
        }
    }
    return {
        link: link,
        scope: {
            information: '=',   // Information about the single or the artist or the album to model.
            setSelectedItem: '&'
        },
        templateUrl: 'directives/templates/infoBoxTemplate.html'
    }
}]
)
;
