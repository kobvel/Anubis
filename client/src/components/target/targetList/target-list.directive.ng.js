angular
    .module("anubis")
    .directive("targetList", targetListDirective);

function targetListDirective() {
    return {
        templateUrl: 'client/src/components/target/targetList/target-list.partial.ng.html',
        bindToController: {
            'targets': '='
        },
        controllerAs: 'vm',
        scope: {},
        restrict: 'E',
        controller: TargetList
    };
}

TargetList.$inject = ["$scope", "$timeout", "metricService"];

function TargetList($scope, $timeout, metricService) {
    var self = this;
    $timeout(function () {
        console.log($scope.targets)
        console.log(self);

    }, 3000);

    self.countToday = function (progress, frequency, goalDate, goal) {
        var total = getTotal(progress);
        var rest = goal - total;

        var onMinute = 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date()
        var secondDate = new Date(goalDate);

        var diffMinutes = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (onMinute))) + 1440;

        return Math.round(rest / (diffMinutes / frequency));
    }


    self.countTotalProgress = function (progress, goal) {
        var total = getTotal(progress);
        return Math.round((total / goal) * 100) / 100;
    }
    self.getMetric = function (mins) {
        return metricService.getMetric(mins);
    }
    function getTotal(progress) {
        var total = 0;
        for (var i = 0; i < progress.length; i++) {
            total += progress[i].value;
        }
        return total;
    }
}