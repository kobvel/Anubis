angular
    .module('anubis')
    .run(function () {

    })
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/targets');
        
        $stateProvider
            .state('targets', {
                url: '/targets',
                templateUrl: 'client/src/components/target/target-list.ng.html',
                controller: 'TargetListController as vm'
            })
    });