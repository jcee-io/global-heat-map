const spectrum = ['purple', '#2b1ed5', '#65cdaa', '#baec88', '#c4ffeb', '#ffffcc', '#fefead', '#ffdd99', '#cc5200', '#cc3300', '#802000'];
const tempRange = [0, 2.7, 3.9, 5, 6.1, 7.2, 8.3, 9.4, 10.5, 11.6, 12.7];
const specWidth = 20;
const specHeight = 47.5;

svg.selectAll('.key')
  .data(spectrum)
  .enter()
  .append('rect')
  .classed('key', true)
  .attr('x', width - padding / 1.5)
  .attr('y', (d, i) => height - padding * 1.15 - (i * specHeight))
  .attr('fill', d => d)
  .attr('height', specHeight)
  .attr('width', specWidth);

svg.selectAll('.key-data')
  .data(tempRange)
  .enter()
  .append('text')
  .classed('key-data', true)
  .attr('x', width - padding / 2)
  .attr('y', (d, i) => height - padding / 1.05 - (i * specHeight))
  .text(d => `> ${d}`);