angular
    .module("anubis")
    .controller("GraphController", GraphController);

GraphController.$inject = ["$scope", "$meteor", "$timeout", "metricService"];

function GraphController($scope, $meteor, $timeout, metricService) {
    var self = this;

    self.user = Meteor.userId();
    self.targets = $meteor.collection(Targets).subscribe('targets');

    $timeout(function(){
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
             .tickFormat(function(d) { return d3.time.format('%b %d')(new Date(d)); });
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
        //var data = self.targets[0].targets[5].progress;
        //console.log(data);

        var data = [];
        sum = 0;
        self.targets[0].targets[5].progress.forEach(function(commit) {
            sum += commit.value;
            data.push({x : commit.date.getTime(), y : sum});
        });
            

        return [
            {
                values : data,
                key : self.targets[0].targets[5].name,
                color : "#4FD0D0"
            }//,
            // {
            //     values : data,
            //     key : self.targets[0].targets[5].name,
            //     color : "#ff7foe"
            // }
        ];

        // var sin = [],
        //     cos = [];

        // for (var i = 0; i < 100; i++) {
        //     sin.push({x: i, y: Math.sin(i/10) });
        //     cos.push({x: i, y: .5 * Math.cos(i/10)});
        // }

        // return [
        //     {
        //         values: sin,
        //         key: "Sine Wave",
        //         color: "#ff7f0e"
        //     },
        //     {
        //         values: cos,
        //         key: "Cosine Wave",
        //         color: "#2ca02c"
        //     }
        // ];
    }
    }
    // InitChart();
    
}
