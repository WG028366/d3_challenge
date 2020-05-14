// var svgWidth = 960;
// var svgHeight = 500;

// var margin = {
//   top: 20,
//   right: 40,
//   bottom: 60,
//   left: 100
// };

// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// var svg = d3.select("#scatter")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);

// d3.csv("data.csv").then(function(healthData){
//     var states = healthData.map(d => d.state);
//     var poverty = healthData.map(d => +d.poverty);
//     var obesity = healthData.map(d => +d.obesity);
  

//     console.log(healthData);
//     console.log("States: ", states);

//     var yLinearScale = d3.scaleLinear().range([height, 0]);
//     var xLinearScale = d3.scaleLinear().range([0, width]);

//     var bottomAxis = d3.axisBottom(xLinearScale);
//     var leftAxis = d3.axisLeft(yLinearScale);
//     chartGroup.append("g")
//       .call(leftAxis);
//     chartGroup.append("g")
//       .attr("transform", `translate(0, ${height})`)
//       .call(bottomAxis);

//     chartGroup.selectAll("circle")
//       .data(healthData)
//       .enter()
//       .append("circle")
//       .attr("cx", d => xLinearScale(poverty))
//       .attr("cy", d => yLinearScale(obesity))
//       .attr("r", 10)
//       .style("fill", "blue")
//       .attr("opacity", ".5");

//     var toolTip = d3.tip()
//       .attr("class", "tooltip")
//       .offset([80, -60])
//       .html(function(d){
//         return(`${d.obesity}`);
//       });

//       chartGroup.call(toolTip);

//     chartGroup.append("g")
//       .selectAll("text")
//       .data(healthData)
//       .enter()
//       .append("text")
//       .attr("x", d =>xLinearScale(poverty))
//       .attr("y", d=> yLinearScale(obesity))
//       .style("text-anchor", "middle")
//       .text(d => d.abbr);

// });

//set up our chart
var svgWidth = 960
var svgHeight = 500

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
}


var width = svgWidth - margin.left - margin.right
var height = svgHeight - margin.top - margin.bottom

//create svg wrapper
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

//bring in csv file
d3.csv("data.csv").then(function(healthData){
  //insert any parsing variables here:
  healthData.forEach(function(data){
    data.income = +data.income
    data.obesity = +data.obesity 
  })

  var xTimeScale = d3.scaleTime
  
})