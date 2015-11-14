
var app = angular.module('todo', [
    'controllers',
    'ngRoute',
    'ui.bootstrap'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        })
         .when('/dashboard', {
            templateUrl: 'partials/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/dashboard/:projectId', {
            templateUrl: 'partials/taskView.html',
            controller: 'TaskCtrl'
        })
        .otherwise({redirectTo: '/login'})
}]);