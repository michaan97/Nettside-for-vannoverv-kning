import React, { Component } from 'react';


import axios from 'axios';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Chart2 from '../../charts/Chart2.js'

class Tempagg extends Component{
	constructor(){
    super();
    this.state = {
      chartData:{},
      isLoaded: false,
      getData: []
    }

    }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    axios.get('https://vannovervakning.com/api/v1/measurements/1/?types=TEMPERATURE')
    .then( (res) => {
      this.setState({
        isLoaded: true,
        getData: res.data,
        chartData:{
          labels: [this.state.getData.data.TEMPERATURE.timeCreated],
          datasets:[
            {
              label:'Temperatur',
              data:[this.state.getData.data.TEMPERATURE.value],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 255, 255, 0.6)'
              ]
            }
          ]
        }
      });
      console.log("getData", this.state.getChartData);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  render() {
    var { isLoaded, getChartData } = this.state;

    if (!isLoaded) {
      return <div> Loading... </div>;
    }
    else {
    return (
      <div className="chart">
        <Chart2 chartData={this.state.chartData} location="Koopen" legendPosition="bottom"/>
      </div>
    );
    }
  }
}


export default Tempagg;
