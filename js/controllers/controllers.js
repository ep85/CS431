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
    };

    $scope.editProject = function(project) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'editProjectModal.html',
            controller: 'EditProjectModalCtrl',
            resolve: {
                project: function() {
                    return project;
                }
            }
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

app.controller('EditProjectModalCtrl', function($scope, $http, $modalInstance, project) {
    $scope.title = project.title;
    $scope.description = project.description;
    console.log(project.id);
    $http({
            method: 'POST',
            url: 'php/getpeople.php'
        }).then(function(response) {    // success callback
            console.log(response);
            $scope.people = response.data;
        }, function(err) {          //failure callback
            console.log(err);
        });
    $scope.update = function() {
        if (!$scope.title) return;
        console.log(users)
        $http({
            method: 'POST',
            url: 'php/updateProject.php',
            data: {
                projectId: project.id,
                title: $scope.title,
                description: $scope.description,
                users: $scope.users
            }
        }, function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        });
        $modalInstance.close();
    };


    $scope.deleteProject = function() {
        $http({
            method: 'POST',
            url: 'php/deleteproject.php',
            data: {
                projectId: project.id
            }
        }).then(function(response) {
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
            size: size,
            resolve: {
                projectId: function() {
                    return projectId;
                }
            }
        });

        modalInstance.result.then(function () {
            onLoad();
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.editTask = function(task) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'editTaskModal.html',
            controller: 'EditTaskModalCtrl',
            resolve: {
                task: function () {
                    return task;
                }
            }
        });

        modalInstance.result.then(function () {
            onLoad();
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.deleteTask = function(id) {
        $http({
            method: 'POST',
            url: 'php/deletetask.php',
            data: {
                taskId: id
            }
        }).then(function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        })
    };

    $scope.getSubTasks = function(index, taskId) {
        $http({
            method: 'POST',
            url: 'php/getsubtask.php',
            data: {
                taskId: taskId
            }
        }).then(function (response) {
            $scope.tasks[index].subtasks = response.data;
        }, function (err){
            console.log(err);
        });
    };

    $scope.newSubTask = function(index, taskId) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'newSubTaskModal.html',
            controller: 'NewSubTaskModalCtrl',
            resolve: {
                taskInfo: function() {
                    return {
                        index: index,
                        taskId: taskId
                    };
                }
            }
        });

        modalInstance.result.then(function () {
            $scope.getSubTasks(index, taskId);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    }
});

app.controller('NewTaskModalCtrl', function ($scope, $http, $modalInstance, projectId) {
    $scope.ok = function() {
        if (!$scope.title) return;

        $http({
            method: 'POST',
            url: 'php/inserttask.php',
            data: {
                projectId: projectId,
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

app.controller('NewSubTaskModalCtrl', function ($scope, $http, $modalInstance, taskInfo) {
    $scope.ok = function() {
        if (!$scope.title) return;
        $http({
            method: 'POST',
            url: 'php/insertsubtask.php',
            data: {
                taskId: taskInfo.taskId,
                title: $scope.title
            }
        }).then(function(response) {
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

app.controller('EditTaskModalCtrl', function ($scope, $http, $modalInstance, task) {
    $scope.title = task.title;
    $scope.description = task.description;
    $scope.subtasks = task.subtasks || [];
    var oldSubTasks = angular.copy($scope.subtasks);

    $scope.update = function() {
        if (!$scope.title) return;
        console.log(oldSubTasks);
        $http({
            method: 'POST',
            url: 'php/updatetask.php',
            data: {
                taskId: task.id,
                title: $scope.title,
                description: $scope.description,
                subtasks: $scope.subtasks,
                oldsubtasks: oldSubTasks
            }
        }, function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        });
        $modalInstance.close();
    };

    $scope.deleteTask = function() {
        $http({
            method: 'POST',
            url: 'php/editProject.php',
            data: {
                taskId: task.id
            }
        }).then(function(response) {
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