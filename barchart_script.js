var bardata = [20, 30, 105, 15, 85, 45, 67, 34, 100];

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

var yScale = d3.scale.linear()
    /* this is a quantitative scale helping to play with the height */
    .domain([0, d3.max(bardata)+5]) /*+5 to ensure that the longest bar doesn't hit the ceiling*/
    .range([0, height])

var xScale = d3.scale.ordinal()
  /* this ordinal scale helps to play with the width */
    .domain(d3.range(0, bardata.length))
    .rangeBands([0, width])

d3.select('#barchart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#F9F2F1')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
        .style('fill', '#C6EC6F')
        .attr('width', xScale.rangeBand()) /* using just 'barWidth' with spill over x */
        .attr('height', function(d) {
            return yScale(d); /* if you don't use yScale, the bar dat will spill over */
        })
        .attr('x', function(d,i) {
            /* return i * (barWidth + barOffset); - without applying xScale*/
            return xScale(i);
        })
        .attr('y', function(d) {
            return height - yScale(d); /* if you don't use yScale, the bar dat will spill over */
        })
