import React, { Component } from 'react';


import axios from 'axios';
//import {Bar, Line, Pie} from 'react-chartjs-2';
import Chart2 from '../../charts/Chart2.js'

class Tempagg extends Component{
	constructor(){
    super();
    this.state = {
      chartData:{},
      isLoaded: false
    }

    }

  componentDidMount(){
    this.getChartData();
  }

  getChartData(){
    axios.get('https://vannovervakning.com/api/v1/measurements/1/?types=TEMPERATURE')
    .then( (res) => {
        const temp = res.data;
				let labels = temp.data.TEMPERATURE.timeCreated.chartData.labels;
				let data = temp.data.TEMPERATURE.value.chartData.datasets.data;
				console.log("hello", res.data);
				Array.prototype.forEach.call(temp, element => {
					labels.push(element.labels);
					data.push(element.data);
				});
      console.log(temp);
				this.setState({
					isLoaded: true,
					chartData: {
						labels:labels,
						datasets: [
							{
								label: "Temperatur",
								data: data,
								backgroundColor: [
									"rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 99, 132, 0.6)"
								],
							}
						]
					}
				});
    	})
    .catch( (error) => {
      console.log(error);
    });
  }

  render() {
    var { isLoaded, ChartData } = this.state;

    if (!isLoaded) {
      return <div> Loading... </div>;
    }
    else {
    return (
      <div className="chart">
			{Object.keys(this.state.chartData).length &&
        <Chart2 chartData={this.state.chartData} location="Vikelva" legendPosition="bottom"/>
				}
      </div>
    );
    }
  }
}


export default Tempagg;
