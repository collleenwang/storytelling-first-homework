/* global d3 */
(function(){
  var svg = d3.select("#chart1")
  var rect = svg.select("rect")

  var widthScale = d3
     .scaleLinear()
     .domain([0,200])
     .range([0,400])

  var colorScale = d3.scaleOrdinal()
     .domain(['man','woman'])
     .range(['#BDB76B','#ADFF2F'])

  rect.attr('fill', colorScale('woman'))
    .attr('width', widthScale(165))

})()