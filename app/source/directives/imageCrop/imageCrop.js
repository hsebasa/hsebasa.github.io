
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
                $scope.isDefaultImage = false;
            } else {
                $scope.isDefaultImage = true;
                $scope.image2Draw = $scope.defaultImage;
            }

            $scope.isWiderImage = parseFloat($scope.image2Draw.width)/parseFloat($scope.image2Draw.height) > parseFloat($scope.width)/parseFloat($scope.height);
            $scope.isHigherImage = (parseFloat($scope.image2Draw.width)/parseFloat($scope.image2Draw.height) < parseFloat($scope.width)/parseFloat($scope.height));
            $scope.sameRatioImage = (!$scope.isWiderImage) && (!$scope.isHigherImage);

            if ($scope.isWiderImage){
                $scope.marginLeft = ((parseFloat($scope.width)-parseFloat($scope.image2Draw.width)*parseFloat($scope.height)/parseFloat($scope.image2Draw.height))/2) + 'px';
                $scope.marginTop = 0;
            } else if ($scope.isHigherImage) {
                $scope.marginLeft = 0;
                $scope.marginTop = (2/5)*((parseFloat($scope.height)-parseFloat($scope.image2Draw.height)*parseFloat($scope.width)/parseFloat($scope.image2Draw.width))/2) + 'px';
            } else {
                $scope.marginLeft = 0;
                $scope.marginTop = 0;
            }
        },
        templateUrl: 'templates/imageAdjust.html'
    }
}])
;
