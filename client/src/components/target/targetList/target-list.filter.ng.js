angular
    .module('anubis')
    .filter('targetFilter', targetFilter);

function targetFilter() {
    return function(targets, targetMetric) {
        if (targets) {
            return targets.filter(function (target) {
                return (targetMetric) ? target.metric === targetMetric : true;
            });
        }
    };
}