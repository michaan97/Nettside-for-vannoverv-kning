import React, { Component } from 'react';


import axios from 'axios';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Chart from '../../charts/Chart.js'

class Tempchart extends Component{
	constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'],
        datasets:[
          {
            label:'Temperatur',
            data:[
              17,
              21,
              17,
              19,
              18.5,
              16,
							19
            ],
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
  }

  render() {
    return (
      <div className="chart">
        <Chart chartData={this.state.chartData} location="Koopen" legendPosition="bottom"/>
      </div>
    );
  }
}


export default Tempchart;
