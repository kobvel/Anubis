angular
    .module('anubis')
    .controller('TargetController', TargetController);

TargetController.$inject = ['$scope', '$meteor', 'toastr', 'metricService'];

function TargetController($scope, $meteor, toastr, metricService) {
    var vm = this;
    vm.user = Meteor.userId();
    vm.targets = $meteor.collection(Targets).subscribe('targets');
    vm.metricService = metricService;
    vm.targetsType = 'All';
}