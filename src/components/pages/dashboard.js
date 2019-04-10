import React, { Component } from 'react';
import axios from 'axios';
import {lastHeard, status, toTime} from '../tools/misc';
import Chart from '../charts/Chart.js'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastHeard:'Laster inn...',
      status:'Laster inn...',
    };
  }

  getData(){
    status().then(online =>{
      var text = 'Offline';
      if(online){
        text = 'Online';
      }
      this.setState({
        status:text,
      });
    });

    lastHeard().then(time =>{
      this.setState({
        lastHeard:time,
      });
    });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="container-fluid">
          Status: {this.state.status}<br/>
          Sist hørt fra: {this.state.lastHeard}<br/>
      </div>

    );
  }
}
export default Dashboard;
