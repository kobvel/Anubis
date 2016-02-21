angular
    .module('anubis')
    .directive('filters', filtersDirective);

function filtersDirective() {
    return {
        controller: 'FiltersController',
        controllerAs: 'vm',
        bindToController: {
            'targets': '=',
            'targetMetric': '='
        },
        scope: {},
        templateUrl: 'client/src/components/filters/filters-layout.ng.html'
    };
}