angular
    .module('anubis')
    .run(function () {

    })
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('projects', {
                url: '/projects',
                templateUrl: 'client/components/projects/views/projects-list.ng.html',
                controller: 'ProjectsListCtrl as projectsCtrl'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'client/components/projects/views/projects-list.ng.html',
                controller: 'ProjectsListCtrl as projectsCtrl'
            });

        $urlRouterProvider.otherwise('/projects');
    });