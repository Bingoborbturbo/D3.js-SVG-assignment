function init() {


  let elements = [ 
    { "x_axis": 280, "y_axis": 230, "size": 80, "type": "dog" },
    { "x_axis": 270, "y_axis": 270, "size": 20, "type": "cat" },
    { "x_axis": 110, "y_axis": 210, "size": 40, "type": "cat" },
    { "x_axis": 10, "y_axis": 110, "size": 140, "type": "reptile" }, //our code ignores reptiles!
    { "x_axis": 20, "y_axis": 30, "size": 60, "type": "dog" }
   ];

  let svg = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 600)
    .style("background-color", d3.color("rgba(255, 0, 0, 0.5)") )
    ;


  let jsonCircles = elements.filter( e => {  return e.type == "cat";  } );

  let jsonRects = elements.filter( e => {  return e.type == "dog";  } );


  let circles = svg.selectAll()
    .data(jsonCircles)
    .enter() //when we are seeing new CAT data for the first time
      .append("circle") //append a circle shape for each data point, and set various attributes based on the data
        .attr("fill", d3.color("rgba(0,255,0,0.5)")  )
        .attr("cx", d => { return d.x_axis; })
        .attr("cy", d => { return d.y_axis; })
        .attr("r", d => { return d.size; }) 
        .attr("stroke", d3.color("rgba(0,0,0,0.5)") )
        .attr("stroke-width", 3)
    ;   
    
    
  let rects = svg.selectAll()
    .data(jsonRects)
    .enter() //when we are seeing new DOG data for the first time
      .append("rect") //append a rect shape for each data point, and set various attributes based on the data
        .attr("fill", d3.color("rgba(0,0,255,0.5)")  )
        .attr("x", d => { return d.x_axis; })
        .attr("y", d => { return d.y_axis; })
        .attr("width", d => { return d.size; }) 
        .attr("height", d => { return d.size; }) 
        .attr("stroke", d3.color("rgba(0,0,0,0.5)") )
        .attr("stroke-width", 3)
    ;    
}
