angular
    .module('anubis')
    .controller('GraphController', GraphController);

GraphController.$inject = ['$scope', '$meteor', '$timeout', 'metricService'];

function GraphController($scope, $meteor, $timeout, metricService) {
    var vm = this;

    vm.user = Meteor.userId();
    vm.targets = $meteor.collection(Targets).subscribe('targets');
    
    $scope.$watch('vm.targets', function () {
        InitChart();
    }, true);


    function InitChart() {
        nv.addGraph(function () {
            var chart = nv.models.lineChart();
            var fitScreen = false;
            var width = 600;
            var height = 300;
            var zoom = 1;

            chart.useInteractiveGuideline(true);

            chart.xAxis
                .axisLabel('Time')
                .tickFormat(function (d) {
                    
                    // if(chart.xAxis.range()[1].getTime()-chart.xAxis.range()[1] > )
                    return d3.time.format('%b %d %H:%M')(new Date(d));
                });
            // .ticks(d3.time.days, 1)
            // .tickFormat(d3.format(',.2f'));


            chart.lines.dispatch.on('elementClick', function (evt) {
                console.log(evt);
            });

            chart.yAxis
                .axisLabel('Progress, %')
                .tickFormat(d3.format(',.2f'));

            d3.select('#main-chart svg')
                .attr('perserveAspectRatio', 'xMinYMid')
                .attr('width', width)
                .attr('height', height)
                .datum(prepareData());

            setChartViewBox();
            resizeChart();

            nv.utils.windowResize(resizeChart);

            function setChartViewBox() {
                var w = width * zoom,
                    h = height * zoom;

                chart
                    .width(w)
                    .height(h);

                d3.select('#main-chart svg')
                    .attr('viewBox', '0 0 ' + w + ' ' + h)
                    .transition().duration(500)
                    .call(chart);
            }

            function resizeChart() {
                var container = d3.select('#main-chart');
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

        function prepareData() {

            var output = [];
            vm.targets[0].targets.forEach(function (target) {
                var data = [];
                sum = 0;
                target.progress.forEach(function (commit) {
                    if (!!target.goalValue && getFilter() === target.metric) {
                        sum += commit.value / target.goalValue * 100;
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

        function getFilter() {
            var e = document.querySelector(".metric-dropdown > select");
            var strUser = e.options[e.selectedIndex].text;
            e.addEventListener("change", InitChart);
            return strUser;
        }
    }
    

}
