angular
    .module('anubis')
    .controller('TargetListController', TargetListController);

TargetListController.$inject = ['$scope', '$timeout', 'metricService', '$reactive'];

function TargetListController($scope, $timeout, metricService, $reactive) {
    var vm = this;

    Object.assign(vm, {
        track: false,
        currentValue: '',

        isTaksCompleted: isTaksCompleted
    });

    console.log($reactive);
    $timeout(function () {
        console.log($scope.targets)
        console.log(vm);

    }, 3000);

    vm.shoulDo = function (item) {
        var total = getTotal(item.progress);
        var rest = item.goalValue - total;

        var onMinute = 60 * 1000; // seconds*milliseconds
        var firstDate = new Date();
        var secondDate = new Date(item.goalDate);
        var diffMinutes = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (onMinute))) + 1440;

        return Math.round(rest / (diffMinutes / item.frequency));
    };

    vm.trackTarget = function (value, index) {
        vm.targets[index].progress.push({
            date: new Date(),
            value: Number(value)
        });
        vm.track = false;
    };

    vm.countTotalProgress = function (progress, goal) {
        var total = getTotal(progress);
        return Math.round((total / goal) * 100);
    };

    vm.getMetric = function (mins) {
        return metricService.getMetric(mins);
    };
    vm.getTotal = getTotal;
    function getTotal(progress) {
        var filterDate = arguments[1];
        filterDate = filterDate ? new Date() : false;
        var total = 0;
        for (var i = 0; i < progress.length; i++) {
            if (filterDate) {
                if (progress[i].date.toDateString() === filterDate.toDateString()) {
                    total += progress[i].value;
                }
            } else {
                total += progress[i].value;
            }
        }
        return total;
    }

    function isTaksCompleted(item) {
        return vm.countTotalProgress(item.progress, item.goalValue) >= 100;
    }
}