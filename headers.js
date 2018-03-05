svg.append('text')
  .attr('transform', `translate(${width / 2}, ${padding / 3.5})`)
  .attr('font-size', '2.5em')
  .attr('text-anchor', 'middle')
  .text('Monthly Global Land-Surface Temperature');

svg.append('text')
  .attr('transform', `translate(${width / 2}, ${padding / 2})`)
  .attr('font-size', '2em')
  .attr('text-anchor', 'middle')
  .text('1753 - 2015');

svg.append('text')
  .attr('transform', `translate(${width / 2}, ${padding / 1.60})`)
  .attr('font-size', '1em')
  .attr('text-anchor', 'middle')
  .text('Temperatures are in Celsius and reported as anomalies relative to the Jan 1951-Dec 1980 average');

svg.append('text')
  .attr('transform', `translate(${width / 2}, ${padding / 1.30})`)
  .attr('font-size', '1em')
  .attr('text-anchor', 'middle')
  .text('Estimated Jan 1951-Dec 1980 absolute temperature C: 8.66 +/- 0.07');

svg.append('text')
  .attr('transform', `translate(${width / 2}, ${height - padding / 2.50})`)
  .attr('font-size', '2em')
  .attr('text-anchor', 'middle')
  .text('Years');

svg.append('text')
  .attr('transform', `rotate(-90) translate(${-height / 2}, ${padding / 2})`)
  .attr('font-size', '2em')
  .attr('text-anchor', 'middle')
  .text('Months');