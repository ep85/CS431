var app = angular.module('controllers', []);

app.controller('MainCtrl', function($scope) {
    $scope.test = 'hey';
});

app.controller('LoginCtrl', function($scope, $http) {

    $scope.submit = function() {
        // HTTP Post
        $http({
            method: 'POST',
            url: '/api/whatever the login route is',
            data: {
                username: $scope.username,
                password: $scope.password
            }
        }).then(function(response) {    // success callback
            console.log(response);
        }, function(err) {          //failure callback
            console.log(err);
        })
    }
});