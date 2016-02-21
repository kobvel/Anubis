angular
    .module('anubis')
    .run(function () {

    })
    .config(function ($urlRouterProvider,
        $stateProvider,
        $locationProvider,
        toastrConfig) {
        $urlRouterProvider.otherwise('/targets');

        $stateProvider
            .state('app', {
                abstract: true,
                url: '',
                templateUrl: 'client/src/components/target/targets-block.ng.html',
                controller: 'TargetController as vm'
            })
            .state('app.targets', {
                url: '/targets',
                template: '<target-list targets="vm.targets[0].targets" target-metric="targetMetric"></target-list>',
            })
            .state('app.d3', {
                url: '/d3',
                templateUrl: 'client/src/components/graphPlayground/d3-layout.html',
                controller: 'GraphController as vm'
            })

        angular.extend(toastrConfig, {
            allowHtml: false,
            autoDismiss: false,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            containerId: 'toast-container',
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            maxOpened: 0,
            messageClass: 'toast-message',
            newestOnTop: true,
            onHidden: null,
            onShown: null,
            onTap: null,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            progressBar: false,
            tapToDismiss: true,
            target: 'body',
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 5000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
    });