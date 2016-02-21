angular
    .module("anubis")
    .directive("chatWidget", chatWidget);

function chatWidget() {
    return {
        templateUrl: 'client/src/components/chatWidget/chat-widget.partial.ng.html',
        scope: {},
        restrict: 'E',
        controller: 'ChatWidgetController',
        bindToController: {},
        controllerAs: 'vm'
    };
}
