angular
    .module("anubis")
    .controller("TargetListController", TargetListController);

TargetListController.$inject = ["$scope", "$meteor", "toastr"];

function TargetListController($scope, $meteor, toastr) {
    var self = this;

    toastr.success('Hello world!', 'Toastr fun!');

    self.user = Meteor.userId();
    self.targets = $meteor.collection(Targets).subscribe('targets');
}