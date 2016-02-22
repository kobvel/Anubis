angular
    .module("anubis")
    .directive("datePickerCustom", datePickerCustom);

function datePickerCustom() {
    return {
        template: '<input type="text" placeholder="MM/DD/YYYY" class="form-control" id="my-datepicker" ng-model="date">',
        scope: {
            'date': '='
        },
        restrict: 'E',
        link: function (scope, element) {
            $(element.children('input')[0]).datepicker();
        }
    };
}
