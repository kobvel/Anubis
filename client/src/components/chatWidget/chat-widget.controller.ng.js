

angular
    .module('anubis')
    .controller('ChatWidgetController', ChatWidgetController);

ChatWidgetController.$inject = ['$scope', '$meteor', 'toastr', '$element', '$timeout', '$interval'];

function ChatWidgetController($scope, $meteor, toastr, $element, $timeout, $interval) {
    var vm = this;
    var promise;
    vm.users = $meteor.collection(Meteor.users, false).subscribe('users');

    vm.user = Meteor.userId();
    if (Meteor.user()) {
        vm.email = Meteor.user().emails[0].address;
    }
    vm.chatIsDisabled = false;
    vm.currenMessage = '';
    vm.seconds = 5;

    vm.messages = $meteor.collection(Messages).subscribe('messages');

    vm.run = function (event) {
        if (event.which === 13) {
            vm.chatIsDisabled = true;
            vm.messages.push({ author: vm.email || 'Anonymus', message: vm.currenMessage });
            for (var i = 0; i < vm.targets.length; i++) {
                if (vm.targets[i].name === 'Feedback chat Activity') {
                    vm.targets[i].progress.push({ 'date': new Date(), 'value': 1 });
                }
            }
            vm.currenMessage = '';

            promise = $interval(function () {
                if (vm.seconds) {
                    vm.seconds -= 1;
                }
            }, 1000);


            $timeout(function () {
                vm.chatIsDisabled = false;
                vm.seconds = 5;
                $interval.cancel(promise);
            }, 5000);
        }
    }

}