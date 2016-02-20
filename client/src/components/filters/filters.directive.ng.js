angular
    .module("anubis")
    .directive("filters", filtersDirective);

function filtersDirective() {
    return {
        templateUrl: 'client/src/components/filters/filters-layout.ng.html'
    };
}