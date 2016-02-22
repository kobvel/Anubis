angular
    .module('anubis')
    .directive('targetList', targetListDirective);

function targetListDirective() {
    return {
        templateUrl: 'client/src/components/target/targetList/target-list.partial.ng.html',
        bindToController: {
            'targets': '=',
            'targetMetric': '=',
            'targetsType': '='
        },
        controllerAs: 'vm',
        scope: {},
        restrict: 'E',
        controller: 'TargetListController'
    };
}
