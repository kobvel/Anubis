angular
    .module("anubis")
    .controller("GraphController", GraphController);

GraphController.$inject = ["$scope", "$meteor", "$timeout", "metricService"];

function GraphController($scope, $meteor, $timeout, metricService) {
    var self = this;

    self.user = Meteor.userId();
    self.targets = $meteor.collection(Targets).subscribe('targets');

    $timeout(function() {
        InitChart();
    }, 3000);

    function InitChart() {
        nv.addGraph(function() {
            var chart = nv.models.lineChart();
            var fitScreen = false;
            var width = 600;
            var height = 300;
            var zoom = 1;

            chart.useInteractiveGuideline(true);

            chart.xAxis
                .axisLabel('Time')
                .tickFormat(function(d) {
                    return d3.time.format('%b %d')(new Date(d)); });
            // .ticks(d3.time.days, 1)
            // .tickFormat(d3.format(',.2f'));


            chart.lines.dispatch.on("elementClick", function(evt) {
                console.log(evt);
            });

            chart.yAxis
                .axisLabel('Value')
                .tickFormat(d3.format(',.2f'));

            d3.select('#chart1 svg')
                .attr('perserveAspectRatio', 'xMinYMid')
                .attr('width', width)
                .attr('height', height)
                .datum(sinAndCos());

            setChartViewBox();
            resizeChart();

            nv.utils.windowResize(resizeChart);

            function setChartViewBox() {
                var w = width * zoom,
                    h = height * zoom;

                chart
                    .width(w)
                    .height(h);

                d3.select('#chart1 svg')
                    .attr('viewBox', '0 0 ' + w + ' ' + h)
                    .transition().duration(500)
                    .call(chart);
            }

            function resizeChart() {
                var container = d3.select('#chart1');
                var svg = container.select('svg');

                if (fitScreen) {
                    // resize based on container's width AND HEIGHT
                    var windowSize = nv.utils.windowSize();
                    svg.attr("width", windowSize.width);
                    svg.attr("height", windowSize.height);
                } else {
                    // resize based on container's width
                    var aspect = chart.width() / chart.height();
                    var targetWidth = parseInt(container.style('width'));
                    svg.attr("width", targetWidth);
                    svg.attr("height", Math.round(targetWidth / aspect));
                }
            }
            return chart;
        });

        function sinAndCos() {
            var output = [];
            self.targets[0].targets.forEach(function(target) {
                var data = [];
                sum = 0;
                target.progress.forEach(function(commit) {
                    sum += commit.value;
                    data.push({ x: commit.date.getTime(), y: sum });
                });

                output.push({
                    values: data,
                    key: target.name,
                    color: getRandomColor()
                });
            });

            return output;
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }
    // InitChart();

}
