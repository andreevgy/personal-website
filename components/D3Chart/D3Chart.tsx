import {useEffect, useRef} from "react";

function generateData() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const startYear = 2000;
  const data = new Array((currentYear - startYear))
    .fill(0)
    .map((d, i) => ({date: new Date(startYear + i, 6, 19), age: i}));

  return data;
}

const drawChart = (chartRef, data) => {
  import('d3')
    .then(d3 => {
      // set the dimensions and margins of the graph
      const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 650 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

      // append the svg object to the body of the page
      const svg = d3.select(chartRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

      // Add X axis --> it is a date format
      const x = d3.scaleTime()
        .domain(d3.extent(data, function (d) {
          return d.date;
        }))
        .range([0, width]);

      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y")).tickValues(data.map(d => d.date)));

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) {
          return +d.age;
        })])
        .range([height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y).tickValues(data.map(d => d.age)));

      // Add the line
      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function (d) {
            return x(d.date)
          })
          .y(function (d) {
            return y(d.age)
          })
        )
    })
}

const D3Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = generateData();
    drawChart(chartRef, data);
  }, []);

  return <div style={{width: '100%', overflowX: 'auto'}}>
    <svg ref={chartRef}/>
  </div>
}

export default D3Chart;
