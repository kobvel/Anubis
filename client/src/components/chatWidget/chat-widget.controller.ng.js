

angular
    .module('anubis')
    .controller('ChatWidgetController', ChatWidgetController);

ChatWidgetController.$inject = ['$scope', '$meteor', 'toastr', '$element', '$timeout', '$interval'];

function ChatWidgetController($scope, $meteor, toastr, $element, $timeout, $interval) {
    var vm = this;
    var promise;
    vm.user = Meteor.userId();

    vm.chatIsDisabled = false;
    vm.currenMessage = '';
    vm.seconds = 5;


    vm.messages = $meteor.collection(Messages).subscribe('messages');
    var messages = vm.messages;

    vm.run = function (event) {
        if (event.which === 13) {
            vm.chatIsDisabled = true;
            console.log(messages)
            Array.prototype.push.call(messages[0], { author: 'Anonymus', message: vm.currenMessage })
            // messages[0].push({ author: 'Anonymus', message: vm.currenMessage });
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
                console.log(vm.messages);
            }, 5000);
        }
    }

}