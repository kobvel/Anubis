angular
    .module('anubis')
    .directive('d3Graph', d3GraphDirective);

function d3GraphDirective() {
    return {
        templateUrl: 'client/src/components/graphPlayground/d3-layout.html',
        controllerAs: 'vm',
        restrict: 'E',
        controller: 'GraphController'
    };
}
