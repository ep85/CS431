var app = angular.module('controllers', []);

app.controller('MainCtrl', function($scope) {
    $scope.test = 'hey';
});

app.controller('LoginCtrl', function($scope, $http, $location) {

    $scope.submit = function() {
        // HTTP Post
        $http({
            method: 'POST',
            url: 'php/login.php',
            data: {
                username: $scope.username,
                password: $scope.password
            }
        }).then(function(response) {    // success callback
            console.log(response);
            $scope.message = response.data;

            if ($scope.message === 'true') {
                $location.path('/dashboard');
            }
        }, function(err) {          //failure callback
            console.log(err);
        })
    }
});
app.controller('DashboardController', function($scope, $http) {
    $http({
            method: 'POST',
            url: 'php/getprojects.php',
        }).then(function(response) {    // success callback
            console.log(response);
            $scope.message = response.data;
        }, function(err) {          //failure callback
            console.log(err);
        })

});