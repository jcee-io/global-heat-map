const tooltip = d3.select('body')
  .append('div')
  .style('opacity', 0)
  .classed('tooltip', true);

const tooltipConfig = () => {
	svg.selectAll('rect')
	  .on('mouseover', d => {
	  	const date = new Date(d.month + ' 1 2018');
	  	const month = d3.timeFormat('%b')(date);

	  	tooltip
	  	  .style('opacity', 0.70)
	  	  .style('left', `${d3.event.x}px`)
	  	  .style('top', `${d3.event.y}px`)
	  	  .html(`
	  	  	<strong>
		  	  	<p>${month} - ${d.year}</p>
		  	  	<p>${d.temp} C</p>
	  	  	</strong>
	  	  	<p>${d.variance} C</p>
	  	  `);
	  })
	  .on('mouseout', () => {
	  	tooltip.style('opacity', 0);
	  });	
};