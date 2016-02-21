

angular
    .module('anubis')
    .controller('ChatWidgetController', ChatWidgetController);

ChatWidgetController.$inject = ['$scope', '$meteor', 'toastr', '$element', '$timeout'];

function ChatWidgetController($scope, $meteor, toastr, $element, $timeout) {
    var vm = this;

    vm.chatIsDisabled = false;
    vm.currenMessage = '';
    vm.run = function (event) {
        if (event.which === 13) {
            vm.chatIsDisabled = true;
            vm.currenMessage = '';
            $timeout(function () {
                vm.chatIsDisabled = false;
            }, 3000);
        }
    }

}