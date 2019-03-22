//BarChartComponent.js
import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component
{
   constructor(props) {
     super(props);
     this.state = {
       getData:props.getData
     }
   }

   static defaultProps = {
     displayTitle:true,
     displayLegend: true,
     legendPosition:'right',
     location:'City'
   }

   render(){
     return (
       <div className="chart">
         <Bar
           data={this.state.getData}
           options={{
             title:{
               display:this.props.displayTitle,
               text:'Hvor kaldt er det i '+this.props.location,
               fontSize:25
             },
             legend:{
               display:this.props.displayLegend,
               position:this.props.legendPosition
             }
           }}
         />

         <Line
           data={this.state.getData}
           options={{
             title:{
               display:this.props.displayTitle,
               text:'Hvor kaldt er det i '+this.props.location,
               fontSize:25
             },
             legend:{
               display:this.props.displayLegend,
               position:this.props.legendPosition
             }
           }}
         />

         <Pie
           data={this.state.getData}
           options={{
             title:{
               display:this.props.displayTitle,
               text:'Hvor kaldt er det i '+this.props.location,
               fontSize:25
             },
             legend:{
               display:this.props.displayLegend,
               position:this.props.legendPosition
             }
           }}
         />
       </div>
     )
   }
 }
export default Chart;
