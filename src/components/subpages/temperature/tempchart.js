import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

import axios from 'axios';


import CanvasJSReact from './../../../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[];
class Tempchart extends Component {

	render() {
		const options = {
			theme: "light2",
			title: {
				text: "Temperaturmålinger"
			},
			axisY: {
				title: "Temp i °C",
				prefix: "°C",
				includeZero: false
			},
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}

	componentDidMount(){
		var chart = this.chart;
		fetch('https://vannovervakning.com/api/v1/measurements/1/1551442300000/?types=TEMPERATURE')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints.push({
					x: new Date(data[i].timeCreated),
					y: data[i].value
				});
			}
      console.log(5);
      console.log(data);
			chart.render();
		});
	}
}
export default Tempchart;
