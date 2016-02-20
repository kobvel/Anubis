angular
    .module("anubis")
    .controller("TargetListController", TargetListController);

TargetListController.$inject = ["$scope", "$meteor", "$rootScope", 'toastr', '$timeout'];

function TargetListController($scope, $meteor, $rootScope, toastr, $timeout) {
    var self = this;
    self.newTarget = {

    };
    toastr.success('Hello world!', 'Toastr fun!');

    self.user = Meteor.userId();
    self.targets = $meteor.collection(Targets).subscribe('targets');

    $timeout(function () {
        self.targets.forEach(function (element) {
            console.log(element.targets);
        }, this);
    }, 3000);
    $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

    self.addNewTarget = function () {
        self.newTarget.owner = $rootScope.currentUser._id;
        self.targets.push(self.newTarget);
        self.newTarget = '';
    }
}