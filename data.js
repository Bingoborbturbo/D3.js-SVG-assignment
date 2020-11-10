function init() {


  let jsonCircles1 = [ 
    { "x_axis": 230, "y_axis": 230, "radius": 1, "color": "green" },
    { "x_axis": 270, "y_axis": 270, "radius": 20, "color": "purple" },
    { "x_axis": 110, "y_axis": 210, "radius": 40, "color": "yellow" }];

  let jsonCircles2 = [ 
      { "x_axis": 470, "y_axis": 30, "radius": 40, "color": "green" },
      { "x_axis": 130, "y_axis": 470, "radius": 1, "color": "purple" },
      { "x_axis": 90, "y_axis": 100, "radius": 20, "color": "yellow" }];


  let jsonCircles3 = [];

  for (let i = 0; i < 200; i++) {

    //making a random color
    let colStr = "rgba(" 
    + ( parseInt(Math.random() * 255) ) + "," 
    + ( parseInt(Math.random() * 255) ) + "," 
    + ( parseInt(Math.random() * 255) ) + "," 
    + 0.3 + ")";
    
    //define the JSON object for the circle (with random x, y, r, and color) 
    let newCircle = { 
      "x_axis": Math.random() * 600, 
      "y_axis": Math.random() * 600,
      "radius": 10 + Math.random() * 20, 
      "color": d3.color( colStr )
    };
    
    jsonCircles3.push(newCircle);
  }

  const svg = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 600)
    .style("background-color", d3.color("rgba(255, 0, 0, 0.5)") )
    ;

  let circles = svg.selectAll()
    .data(jsonCircles1)
    .enter() //when we are seeing new data for the first time
      .append("circle") //append a circle shape for each data point, and set various attributes based on the data
        
        .attr("fill", setColor )
        .attr("cx", function (d) { return d.x_axis; })
        .attr("cy", function (d) { return d.y_axis; })
        .attr("r", d => { 
          if (d.radius < 10) { //make sure circle isn't too tiny!
            return 10;
          }
          return d.radius;
         })

        .attr("stroke", d3.color("rgba(0,0,0,0.5)") )
        .attr("stroke-width", 3)
    ;    
}

function setColor(d, i) {
  console.log("i = " + i + ": " + d.color + " ... ");
  return d.color; 
}