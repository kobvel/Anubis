angular
    .module("anubis")
    .directive("datePickerCustom", datePickerCustom);

function datePickerCustom() {
    return {
        template: '<input type="text" class="form-control" id="my-datepicker" ng-model="date">',
        scope: {
            'date': '='
        },
        restrict: 'E',
        link: function (scope, element) {
            $('#my-datepicker').datepicker();
        }
    };
}
