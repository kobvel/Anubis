angular
    .module('anubis')
    .controller('TargetListController', TargetListController);

TargetListController.$inject = ['$scope', '$timeout', 'metricService', 'toastr'];

function TargetListController($scope, $timeout, metricService, toastr) {
    var vm = this;

    Object.assign(vm, {
        track: false,
        currentValue: '',
        taskName: '',
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
        numbersPattern: /^[1-9]\d*$/,

        metricService: metricService,
        isTaksCompleted: isTaksCompleted,
        addTarget: addTarget,
        isTargetNameFieldEmpty: isTargetNameFieldEmpty,
        deleteTarget: deleteTarget
    });


    vm.shoulDo = function (item) {
        var total = getTotal(item.progress);
        var rest = item.goalValue - total;

        var onMinute = 60 * 1000; // seconds*milliseconds
        var firstDate = new Date();
        var secondDate = new Date(item.goalDate);
        var diffMinutes = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (onMinute))) + 1440;
        
        var result = Math.round(rest / (diffMinutes / item.frequency)); 
        return result < 0 ? null: result;
    };

    vm.trackTarget = function (value, index) {
        if (value) {
            vm.targets[index].progress.push({
                date: new Date(),
                value: Number(value)
            });
            toastr.success(getTotal(vm.targets[index].progress) + ' TODAY', 'You are coming closer to target!');

        }

        vm.track = false;

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
        return Math.round(total * 100) / 100;
    }

    function isTaksCompleted(item) {
        return vm.countTotalProgress(item.progress, item.goalValue) >= 100;
    }

    function addTarget(formValid) {
        if (vm.taskName && formValid) {
            vm.targets.push({
                frequency: (vm.frequency) ? vm.frequency.value : '',
                goalDate: vm.goalDate || '',
                goalValue: vm.goalValue || '',
                metric: vm.metric || '',
                metricShort: (vm.metric) ? vm.metric.charAt(0) : '',
                name: vm.taskName,
                progress: [],
                startDate: new Date(),
                status: 'active'
            });
            toastr.success('New target had been added', 'Anubis satisfied!');
            clearTargetAdditingForm();
        } else {
            toastr.error('Please, fill in all fields correctly', 'Invalid form');
        }
    }

    function clearTargetAdditingForm() {
        vm.showTaskCreateOption = false;
        vm.taskName = '';
    }

    function isTargetNameFieldEmpty() {
        return vm.taskName === '';
    }

    function deleteTarget() {
        toastr.warning('This is a public task, please, be sweet and do not delete it', 'It is not your task');
    }
}