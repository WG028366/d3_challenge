/*
<svg width="510" height="400">
    <text transform="translate(310,320)">In Poverty (%)</text>
    <text transform="translate(60,135) rotate(-90)">Obese (%)</text>
    <circle cx="150" cy="150" r="10" class="stateCircle"></circle>
    <text transform="translate(150,150)" class="stateText" font-size="10">ST</text>
</svg>
*/

var svgWidth = 1000;
var svgHeight = 600;

// @TODO: YOUR CODE HERE!
var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
}
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;


// var svg = d3.select("#scatter")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

var data;

function importData(element) {
    data = element;
    console.log(data);
    runLater();
    
}


var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width",svgWidth)
    .attr("height",svgHeight)

svg
    .append("text")
    .attr("transform","translate(310,320)")
    .text("In Poverty (%)");

svg
    .append("text")
    .attr("transform","translate(60,135) rotate(-90)")
    .text("Obese (%)");

d3.csv("data.csv").then(importData);


var x, xMin, xMax;
var y, yMin, yMax; 

var xScale;
var yScale;



function runLater() {

    // xMin = 1000;

    // for (var i = 0; i < data.length; i++){
    //     if(data[i].poverty < xMin){
    //       xMin = data[i].poverty;
    //     } 
    // }
    xMin = d3.min(data, d => parseFloat(d.poverty));
    xMax = d3.max(data, d => parseFloat(d.poverty));
    yMax = d3.max(data, d => parseFloat(d.obesity));
    yMin = d3.min(data, d => parseFloat(d.obesity));

    xScale = d3.scaleLinear()
      .domain([xMin, xMax])
      .range([0, 510]);

    yScale = d3.scaleLinear()
      .domain([yMin, yMax])
      .range([0,400]);
      

    for (var i = 0; i < data.length; i++){

        x = parseFloat(data[i].poverty);
        y = parseFloat(data[i].obesity);

        svg
            .append("circle")
            .attr("cx", xScale(x))
            .attr("cy", yScale(y))
            .attr("r", 10)
            .attr("class", "stateCircle");

        svg
            .append("text")
            .attr("transform", "translate(" + (xScale(x)) + "," + (yScale(y)) +")")
            .attr("class", "stateText")
            .attr("font-size", 10)
            .text(data[i].abbr);
};
}

// for (i = 0; i < data.length; i++){  

    







// var xScale;
// var yScale;

// function runLater() {


//     xMin = Number.MAX_VALUE;
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].poverty < xMin) {
//             xMin = parseFloat(data[i].



