function init(elements) {
const render = data => 
{svg.selectAll('rect').data(data)
   .enter().apend ('rect')
     .attr('width',300)
     .attr('height',300)
}; 

  let svg = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 600)
    .style("background-color", d3.color("rgba(40, 35025, 60, 0.5)") )
    ;
    
   let rects = svg.selectAll()
    
    .enter() 
      .append("rect") 
        .attr("fill", d3.color("rgba(0,0,255,0.5)")  )
        .attr("x", d => { return -30 + d.days * 60; })
        .attr("y", d => { return -30 + 600 - d.barked * 60; })
        .attr("width", d => { return 60; }) 
        .attr("height", d => { return 60; }) 
        .attr("stroke", d3.color("rgba(0,0,0,0.5)") )
        .attr("stroke-width", 3)
    ;    


let text = svg.selectAll()
  
  .enter()
  .append("text")
  .attr("text-anchor","middle")
  .attr("font-family", "sans-serif")
  .attr("font-size", "16px")
  .attr("fill", "black")
  .attr("x", d => { return -30 + (d.monday* 60) + 30; })
  .attr("y", d => { return -30 + 600 - (d.barked * 60) + 80; })
  .text(d => {return d.barked})


const xText = svg.append("text")
  .attr("x", 300)
  .attr("y", 590)
  .attr("text-anchor","middle")
  .attr("font-family", "sans-serif")
  .attr("font-size", "24px")
  .attr("fill", "black")
  .text("Days of the Week");





const yText = svg.append("text")
  //.attr("x", 300)
  //.attr("y", 300)
  .attr("text-anchor","middle")
  .attr("font-family", "sans-serif")
  .attr("font-size", "24px")
  .attr("fill", "black")
  //.attr("transform", "translate(0,0) rotate()")
  .attr("transform", "translate(10,300) rotate(90)")
  .text("Amount of times barked");



}