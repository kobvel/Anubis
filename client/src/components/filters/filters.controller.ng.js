angular
    .module('anubis')
    .controller('FiltersController', FiltersController);

FiltersController.$inject = ['$scope', 'metricService'];

function FiltersController($scope, metricService) {
    var vm = this;

    var targetsType = {
        ALL: 'All',
        ACTIVE: 'Active',
        COMPLETED: 'Completed'
    };

    vm.metricService = metricService;

    vm.showAllTargets = function () {
        vm.targetsType = targetsType.ALL;
    }

    vm.showActiveTargets = function () {
        vm.targetsType = targetsType.ACTIVE;
    }

    vm.showCompletedTargets = function () {
        vm.targetsType = targetsType.COMPLETED;
    }
}