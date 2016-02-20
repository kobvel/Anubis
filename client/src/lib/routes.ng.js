angular
    .module('anubis')
    .run(function () {

    })
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('targets', {
                url: '/targets',
                templateUrl: 'client/components/target/target-list.ng.html',
                controller: 'TargetListController as vm'
            })
        $urlRouterProvider.otherwise('/targets');
    });