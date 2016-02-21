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
        
        var data = self.targets[0].targets[5].progress;
        console.log(data);
        // var data = [{
        //     "value": "202",
        //     "year": "2000"
        // }, {
        //     "value": "215",
        //     "year": "2002"
        // }, {
        //     "value": "179",
        //     "year": "2004"
        // }, {
        //     "value": "199",
        //     "year": "2006"
        // }, {
        //     "value": "134",
        //     "year": "2008"
        // }, {
        //     "value": "176",
        //     "year": "2010"
        // }];
        var vis = d3.select("#visualisation"),
            WIDTH = 500,
            HEIGHT = 500,
            MARGINS = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 50
            },
            xScale = d3.time.scale().range([MARGINS.left, WIDTH - MARGINS.right]).domain([new Date(2016,2,20), new Date(2016,4,24)]),
            yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 4]),
            xAxis = d3.svg.axis()
            .scale(xScale),
            yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

        vis.append("svg:g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
        vis.append("svg:g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + (MARGINS.left) + ",0)")
            .call(yAxis);
        var lineGen = d3.svg.line()
            .x(function(d) {
                return xScale(d.date);
            })
            .y(function(d) {
                return yScale(d.value);
            })
            .interpolate("basis");
        vis.append('svg:path')
            .attr('d', lineGen(data))
            .attr('stroke', 'green')
            .attr('stroke-width', 2)
            .attr('fill', 'none');
        /*  vis.append('svg:path')
              .attr('d', lineGen(data2))
              .attr('stroke', 'blue')
              .attr('stroke-width', 2)
              .attr('fill', 'none');*/
    }
    // InitChart();

}
