angular
    .module("anubis")
    .controller("TargetListController", TargetListController);

TargetListController.$inject = ["$scope", "$meteor", "toastr"];

function TargetListController($scope, $meteor, toastr) {
    var vm = this;

    toastr.success('Hello world!', 'Toastr fun!');

    vm.user = Meteor.userId();
    vm.targets = $meteor.collection(Targets).subscribe('targets');

}