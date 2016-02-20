angular
    .module("anubis")
    .controller("TargetListController", TargetListController);

TargetListController.$inject = ["$scope", "$meteor", "$rootScope", "toastr", "$timeout", "metricService"];

function TargetListController($scope, $meteor, $rootScope, toastr, $timeout, metricService) {
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

    self.countToday = function (progress, frequency, goalDate, goal) {
        var total = getTotal(progress);
        var rest = goal - total;

        var onMinute = 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date()
        var secondDate = new Date(goalDate);

        var diffMinutes = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (onMinute))) + 1440;
        console.log(rest, diffMinutes/frequency);
        return Math.round(rest / (diffMinutes / frequency));
    }


    self.countTotalProgress = function (progress, goal) {
        var total = getTotal(progress);
        return Math.round((total / goal) * 100) / 100;
    }

    function getTotal(progress) {
        var total = 0;
        for (var i = 0; i < progress.length; i++) {
            total += progress[i].value;
        }
        return total;
    }
    self.getMetric = function (mins) {
        return metricService.getMetric(mins);
    }
}