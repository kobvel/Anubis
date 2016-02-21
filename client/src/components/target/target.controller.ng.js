angular
    .module('anubis')
    .controller('TargetController', TargetController);

TargetController.$inject = ['$scope', '$meteor', 'toastr'];

function TargetController($scope, $meteor, toastr) {
    var vm = this;

    Object.assign(vm, {
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

        addTarget: addTarget
    });

    toastr.success('Hello world!', 'Toastr fun!');

    vm.user = Meteor.userId();
    vm.targets = $meteor.collection(Targets).subscribe('targets');

    function addTarget() {
        vm.targets[0].targets.push({
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
    }
}