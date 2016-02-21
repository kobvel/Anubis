angular
    .module('anubis')
    .controller('TargetController', TargetController);

TargetController.$inject = ['$scope', '$meteor', 'toastr'];

function TargetController($scope, $meteor, toastr) {
    var vm = this;

    toastr.success('Hello world!', 'Toastr fun!');

    vm.user = Meteor.userId();
    vm.targets = $meteor.collection(Targets).subscribe('targets');
}