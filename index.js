const height = 800;
const width = 1300;
const padding = 160;

const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json';

const barHeight = (height - padding * 2) / 11;

const svg = d3.select('svg')
  .attr('width', width)
  .attr('height', height);


const axisConfig = (xScale, yScale) => {
	const yAxis = d3.axisLeft(yScale);
	const xAxis = d3.axisBottom(xScale);

	yAxis.tickFormat((d) => {
		const date = new Date(d + ' 1 2018');

		return d3.timeFormat('%B')(date);
	});

	svg.append('g')
		.attr('transform', `translate(${padding},0)`)
	  .call(yAxis);

	svg.append('g')
		.attr('transform', `translate(0,${height - padding / 1.35})`)
	  .call(xAxis);
};



d3.json(url, (err, { monthlyVariance, baseTemperature }) => {
	const barWidth = ((width - padding * 2) * 12) / monthlyVariance.length
	monthlyVariance.forEach(d => d.temp = (baseTemperature + d.variance).toFixed(2));

  const xExtent = d3.extent(monthlyVariance, d => d.year);

  const yScale = d3.scaleLinear()
    .domain([12, 1])
    .range([height - padding, padding]);


  const xScale = d3.scaleLinear()
    .domain(xExtent)
    .range([padding, width - padding]);
  
  axisConfig(xScale, yScale);

  

  svg.selectAll('rect')
    .data(monthlyVariance)
    .enter()
    .append('rect')
    .attr('fill', ({ temp }) => {
    	if (temp > 12.7)      return '#802000';
    	else if (temp > 11.6) return '#cc3300';
    	else if (temp > 10.5) return '#cc5200';
    	else if (temp > 9.4)  return '#ffdd99';
    	else if (temp > 8.3)  return '#fefead';
    	else if (temp > 7.2)  return '#ffffcc';
    	else if (temp > 6.1)  return '#c4ffeb';
    	else if (temp > 5)    return '#baec88';
    	else if (temp > 3.9)	return '#65cdaa';
    	else if (temp > 2.7)  return '#2b1ed5';

 			return 'purple';
    })
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d.month) - barHeight / 2)
    .attr('height', barHeight)
    .attr('width', barWidth);
  tooltipConfig();
});