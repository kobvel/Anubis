angular
    .module('anubis')
    .controller('FiltersController', FiltersController);

FiltersController.$inject = ['$scope', 'metricService'];

function FiltersController($scope, metricService) {
    const vm = this;
    vm.metricService = metricService;
}