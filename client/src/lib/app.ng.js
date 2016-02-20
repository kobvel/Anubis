angular.module('anubis',
    ['angular-meteor',
        'ui.router',
        'ngAnimate',
        'toastr',
        'ui.bootstrap',
        'accounts.ui'
    ]);

function onReady() {
    angular.bootstrap(document, ['anubis'], {
        //strictDi: true
    });
}

angular.element(document).ready(onReady);