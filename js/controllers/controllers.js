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
app.controller('DashboardController', function($scope, $http, $modal) {

    onLoad();

    function onLoad() {
        $http({
            method: 'POST',
            url: 'php/getprojects.php'
        }).then(function(response) {    // success callback
            console.log(response);
            $scope.projects = response.data;
        }, function(err) {          //failure callback
            console.log(err);
        });
    }

    $scope.newProject = function(size) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'newProjectModal.html',
            controller: 'NewProjectModalCtrl',
            size: size
        });

        modalInstance.result.then(function () {
            onLoad();
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    }
});

app.controller('NewProjectModalCtrl', function($scope, $http, $modalInstance) {

    $scope.ok = function() {
        if (!$scope.title) return;

        $http({
            method: 'POST',
            url: 'php/insertproject.php',
            data: {
                title: $scope.title,
                description: $scope.description
            }
        }, function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        });

        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    }
});

app.controller('TaskCtrl', function($scope, $routeParams, $http, $modal) {
    var projectId = $routeParams.projectId;

    onLoad();

    function onLoad() {
        $http({
            method: 'POST',
            url: 'php/gettasks.php',
            data: {
                projectId: projectId
            }
        }).then(function(response) {
            console.log(response);
            $scope.tasks = response.data;
        }, function(err) {
            console.log(err);
        });
    }

    $scope.newTask = function(size) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'newTaskModal.html',
            controller: 'NewTaskModalCtrl',
            size: size
        });

        modalInstance.result.then(function () {
            onLoad();
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    }
});

app.controller('NewTaskModalCtrl', function ($scope, $http, $modalInstance) {

    $scope.ok = function() {
        if (!$scope.title) return;

        $http({
            method: 'POST',
            url: 'php/inserttask.php',
            data: {
                title: $scope.title,
                description: $scope.description
            }
        }, function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        });

        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    }
});