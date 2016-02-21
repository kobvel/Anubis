angular
    .module('anubis')
    .controller('TargetListController', TargetListController);

TargetListController.$inject = ['$scope', '$timeout', 'metricService', 'toastr'];

function TargetListController($scope, $timeout, metricService, toastr) {
    var vm = this;

    Object.assign(vm, {
        track: false,
        currentValue: '',
        frequencies: [{
            name: 'hour',
            value: 60
        }, {
            name: 'day',
            value: 1440
        }, {
            name: 'week',
            value: 10080
        }, {
            name: 'month',
            value: 302400
        }],
        targetsType: 'All',

        isTaksCompleted: isTaksCompleted,
        addTarget: addTarget,
        showAll: showAll,
        showActiveTargets: showActiveTargets,
        showCompletedTargets: showCompletedTargets,
        isTargetsTypeAll: isTargetsTypeAll,
        isTargetsTypeActive: isTargetsTypeActive,
        isTargetsTypeCompleted: isTargetsTypeCompleted
    });
    const targetsTypes = {
        ALL: 'All',
        ACTIVE: 'Active',
        COMPLETED: 'Completed'
    };


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
        toastr.success(getTotal(vm.targets[index].progress) + ' TODAY', 'You are coming closer to target!');

        if (vm.isTaksCompleted(vm.targets[index])) {
            vm.targets[index].status = 'done';
        }
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

    function addTarget() {
        vm.targets.push({
            frequency: vm.frequency.value,
            goalDate: vm.goalDate,
            goalValue: vm.goalValue,
            metric: vm.metric,
            metricShort: vm.metric.charAt(0),
            name: vm.taskName,
            progress: [],
            startDate: (new Date()).toString(),
            status: 'active'
        });
        toastr.success('New target had been added', 'Anubis satisfied!');
    }

    function showAllTargets() {
        vm.targetsType = targetsTypes.ALL;
    }

    function showActiveTargets() {
        vm.targetsType = targetsTypes.ACTIVE;
    }

    function showCompletedTargets() {
        vm.targetsType = targetsTypes.COMPLETED;
    }

    function isTargetsTypeAll() {
        return vm.targetsType === targetsTypes.ALL;
    }

    function isTargetsTypeActive() {
        return vm.targetsType === targetsTypes.ACTIVE;
    }

    function isTargetsTypeCompleted() {
        return vm.targetsType === targetsTypes.COMPLETED;
    }
}