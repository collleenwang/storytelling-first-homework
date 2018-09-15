/* global d3 */
(function() {
  // Build your SVG here
  // using all of that cut-and-paste magic

var margin = { top: 50, right: 50, bottom: 50, left: 50 }

var width = 400 - margin.left - margin.right

var height = 400 - margin.top - margin.bottom


  var svg = d3.select("#chart12")
    .append("svg")
    .attr("height", width+margin.left+margin.right)
    .attr("width", height+margin.top+margin.bottom)
    .append('g')
    .attr('transform','translate(' + margin.left + ',' +margin.top +')')



  // Build your scales here

  var xPositionScale = d3
      .scaleLinear()
      .domain([0,10])
      .range([0,width])

   var yPositionScale = d3
      .scaleLinear()
      .domain([0,10])
      .range([height,0])
   
    var radiusScale = d3
      .scaleSqrt()
      .domain([0,1000])
      .range([0,50])

   var colorScale = d3
      .scaleOrdinal()
      .range(['red','green','blue','grey','black','purple','yellow'])


  d3.csv("eating-data.csv")
    .then(ready)
    .catch(function(err) {
      console.log("Failed with", err)
    })


  function ready(datapoints) {
    // Add and style your marks here

  svg.selectAll("circle")
     .data(datapoints)
     .enter().append("circle")
     .attr('fill',function(d) {
      return colorScale(d.animal)
    })
     .attr("cx", function(d) {
      return xPositionScale(d.hamburgers);
    })
     .attr('cy',200)
     .attr("r", function(d) {
      return radiusScale(d.hotdogs);
    })


   var yAxis = d3.axisLeft(yPositionScale);
  svg
    .append("g") 
    .attr("class", "axis y-axis")
    .call(yAxis);

  var xAxis = d3.axisBottom(xPositionScale);
  svg
    .append("g") 
    .attr("class", "axis x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  }
})()