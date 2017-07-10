app.directive('dupe', function () {
    return {
        require:'ngModel',
        scope:{
            player2:'=dupe'
        },
        link: function ($scope, elem, attrs,ngModel) {

            ngModel.$validators.compare = function(val) {
            return val !== $scope.player2 || $scope.player2 ==undefined && val==undefined;
            };

            $scope.$watch("player2", function() {
                ngModel.$validate();
            });

        }

    }
});