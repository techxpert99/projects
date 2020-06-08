(function() {
    'use strict';

    angular.module('LunchChecker', [])

    .controller('LCCtl', ['$scope', function($scope) {
        $scope.message = "";
        $scope.lunch_menu = "";
        $scope.color = "#FF00FF";
        $scope.checkLunch = function() {
            var lunch = $scope.lunch_menu;
            if (lunch == 0 || lunch.length == 0)
                $scope.message = "Please enter data first";
            else {
                lunch = lunch.split(',');
                if (lunch.length <= 3)
                    $scope.message = "Enjoy!";
                else
                    $scope.message = "Too Much!";
            }
        };
    }]);
})();