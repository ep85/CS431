var app = angular.module('controllers', []);

app.controller('MainCtrl', function($scope) {
    $scope.test = 'hey';
});

app.controller('LoginCtrl', function($scope, $http, $location) {

    $scope.submit = function() {
        // HTTP Post
        $http({
            method: 'POST',
            url: '/php/login.php',
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
    $http({
        method: 'POST',
        url: '/php/getprojects.php'
    }).then(function(response) {    // success callback
        console.log(response);
        $scope.projects = response.data;
    }, function(err) {          //failure callback
        console.log(err);
    });

    $scope.newProject = function(size) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'newProjectModal.html',
            controller: 'NewProjectModalCtrl',
            size: size
        });
    }
});

app.controller('NewProjectModalCtrl', function($scope, $http, $modalInstance) {

    $scope.ok = function() {
        $http({
            method: 'POST',
            url: '/php/insertproject.php',
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

app.controller('TaskCtrl', function($scope, $routeParams, $http) {
    var projectId = $routeParams.projectId;
    $scope.tasks = [];

    //$http({
    //    method: 'POST',
    //    url: 'php/gettasks.php',
    //    data: {
    //        projectId: projectId
    //    }
    //}).then(function(response) {
    //
    //}, function(err) {
    //
    //});

    var all = [
        {
            id: 1,
            projectId: 1,
            title: 'Some title',
            description: 'Some random description'
        },
        {
            id: 2,
            projectId: 2,
            title: 'Another task title',
            description: 'Some random description for this econd title'
        },
        {
            id: 3,
            projectId: 3,
            title: 'Another task title',
            description: 'Some random description for this econd title'
        },
        {
            id: 4,
            projectId: 2,
            title: 'Another MG i nee some name',
            description: 'Some random descript adh skdjh dkasd gasdhg ion for this econd title'
        }
    ];

    for (var i = 0; i < all.length; i++) {
        if (all[i].projectId == projectId) {
            $scope.tasks.push(all[i]);
        }
    }
});