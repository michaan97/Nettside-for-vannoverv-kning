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
				console.log("hello", temp);
				let labels = [];
				let data = [];
				temp.data.TEMPERATURE.forEach(el => {
					let datestring = new Date(el.timeCreated)
					labels.push(datestring.toLocaleDateString());
					data.push(el.value);
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
    var { isLoaded, chartData } = this.state;

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
