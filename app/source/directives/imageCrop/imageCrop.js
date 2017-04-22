
angular.module('musicApp.directives')
.directive('adjustImage', [function(){
    return {
        scope: {
            width: '@',
            height: '@',
            imageProperties: '=',
            defaultImage: '='
        },
        link: function($scope){
            $scope.pf = parseFloat;
            if (!!$scope.imageProperties){
                $scope.image2Draw = $scope.imageProperties;
            } else {
                $scope.image2Draw = $scope.defaultImage;
            }
        },
        templateUrl: 'templates/imageAdjust.html'
    }
}])
;
