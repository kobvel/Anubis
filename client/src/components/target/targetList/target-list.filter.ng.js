angular
    .module('anubis')
    .filter('targetFilter', targetFilter);

function targetFilter() {
    return function(targets, targetMetric, targetsTypesToShow) {
        if (targets) {
            return targets.filter(function (target) {
                if (targetsTypesToShow === 'All') {
                    return (targetMetric) ? target.metric === targetMetric : true;
                } else if (targetsTypesToShow === 'Active') {
                    if (targetMetric) {
                        return target.metric === targetMetric && target.status === 'active';
                    } else {
                        return target.status === 'active';
                    }
                } else {
                    if (targetMetric === 'Completed') {
                        return target.metric === targetMetric && target.status === 'done';
                    } else {
                        return target.status === 'done';
                    }
                }
            });
        }
    };
}