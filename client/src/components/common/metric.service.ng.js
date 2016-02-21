angular.module('anubis')
    .service('metricService', metricService);

function metricService() {
    return {
        getMetric: getMetric,
        // TODO: move to special services
        target: {},
        searchQuery: ''
    };
    function getMetric(minutes) {
        var metric = 'day';
        switch (minutes) {
            case 1440:
                break;
            case 10080:
                metric = 'week';
                break;
            case 60:
                metric = 'hour';
                break;
            case 302400:
                metric = 'month';
                break;
        }
        return metric;
    }
}