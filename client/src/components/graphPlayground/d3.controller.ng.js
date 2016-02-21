angular
    .module('anubis')
    .controller('GraphController', GraphController);

GraphController.$inject = ['$scope', '$meteor', '$timeout', 'metricService'];

function GraphController($scope, $meteor, $timeout, metricService) {
    var vm = this;

    vm.user = Meteor.userId();
    vm.targets = $meteor.collection(Targets).subscribe('targets');

    var filterSelect = ".metric-dropdown > select";
    var svgContainers = ["#main-chart", "#additional-chart"];

    document.querySelector(filterSelect).addEventListener("change", function() {
        InitChart(svgContainers[0]);
        InitChart(svgContainers[1]);
    });


    $scope.$watch('vm.targets', function() {
        InitChart(svgContainers[0]);
        InitChart(svgContainers[1]);
    }, true);


    function InitChart(svgParent) {
        nv.addGraph(function() {
            var chart = nv.models.lineChart();
            var fitScreen = false;
            var width = 500;
            var height = 300;
            var zoom = 1;

            chart.useInteractiveGuideline(true);

            chart.xAxis
                .axisLabel('Time')
                .tickFormat(function(d) {

                    // if(chart.xAxis.range()[1].getTime()-chart.xAxis.range()[1] > )
                    return d3.time.format('%b %d %H:%M')(new Date(d));
                });
            // .ticks(d3.time.days, 1)
            // .tickFormat(d3.format(',.2f'));


            chart.lines.dispatch.on('elementClick', function(evt) {
                console.log(evt);
            });

            var yAxisText = "";
            if (svgParent === svgContainers[0]) {
                yAxisText = "Progress, %";
            } else {
                var filterValue = getFilter();
                if (filterValue === "" || filterValue === "Select metric") {
                    yAxisText = "Progress";
                } else {
                    yAxisText = "Progress, " + filterValue;
                }
            }


            chart.yAxis
                .axisLabel(yAxisText)
                .tickFormat(d3.format(',.2f'));
            console.warn(d3.select('#main-chart svg'));
            d3.select(svgParent + ' svg')
                .attr('perserveAspectRatio', 'xMinYMid')
                .attr('width', width)
                .attr('height', height)
                .datum(prepareData(svgParent));

            setChartViewBox();
            resizeChart();

            nv.utils.windowResize(resizeChart);

            function setChartViewBox() {
                var w = width * zoom,
                    h = height * zoom;

                chart
                    .width(w)
                    .height(h);

                d3.select(svgParent + ' svg')
                    .attr('viewBox', '0 0 ' + w + ' ' + h)
                    .transition().duration(500)
                    .call(chart);
            }

            function resizeChart() {
                var container = d3.select(svgParent);
                var svg = container.select('svg');

                if (fitScreen) {
                    // resize based on container's width AND HEIGHT
                    var windowSize = nv.utils.windowSize();
                    svg.attr('width', windowSize.width);
                    svg.attr('height', windowSize.height);
                } else {
                    // resize based on container's width
                    var aspect = chart.width() / chart.height();
                    var targetWidth = parseInt(container.style('width'));
                    svg.attr('width', targetWidth);
                    svg.attr('height', Math.round(targetWidth / aspect));
                }
            }
            return chart;
        });

        function prepareData(svgParent) {

            var output = [];
            vm.targets[0].targets.forEach(function(target) {
                var data = [];
                sum = 0;

                //sort data chronologicaly for proper representation on graphs
                target.progress.sort(function(a,b) {
                    return a.date.getTime() - b.date.getTime();
                });

                target.progress.forEach(function(commit) {
                    var filter = getFilter();
                    if (!!target.goalValue && (filter === target.metric || filter === "" || filter === "Select metric")) {
                        if (svgParent === svgContainers[0]) {
                            sum += commit.value / target.goalValue * 100;
                        } else {
                            sum = commit.value;
                        }
                        data.push({ x: commit.date.getTime(), y: sum });
                    }
                });

                if (data.length > 0) {
                    output.push({
                        values: data,
                        key: target.name,
                        color: getRandomColor()
                    });
                }

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

    function getFilter() {
        var e = document.querySelector(filterSelect);
        var strUser = e.options[e.selectedIndex].text;
        return strUser;
    }
}
