angular
    .module("anubis")
    .controller("TargetListController", TargetListController);

TargetListController.$inject = ["$scope", "$meteor"];

function TargetListController($scope, $meteor) {
    var self = this;

    self.user = Meteor.userId();
    self.projects = $meteor.collection(Projects).subscribe('projects');
    $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

}