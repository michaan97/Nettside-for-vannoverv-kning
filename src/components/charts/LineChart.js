//BarChartComponent.js
import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';

class LineChart extends Component
{
  constructor(props){
     super(props);
     this.state = {
       chartData:props.chartData
     }
   }

   static defaultProps = {
     displayTitle:true,
     displayLegend: false,
     legendPosition:'right',
     location:'Place'
   }


   componentWillReceiveProps(props){
     if(props.chartData !== this.state.chartData){
       this.setState({
         chartData:props.chartData,
       });
     }
   }


   render(){
     return (
       <div className="chart" style={{width:'100%',}}>
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:this.props.title+ ' ' +this.props.location,
              fontSize:25
            },
            animation: {
              duration: 0 // general animation time
            },
            legend:{
              reverse:true,
              display:this.props.displayLegend,
              position:this.props.legendPosition,

            },
            scales: {
              xAxes: [{
                  type: 'time',

              }]
            }
          }}
        />
       </div>
     )
   }
 }
export default LineChart;
