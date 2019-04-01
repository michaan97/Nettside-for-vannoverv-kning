import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const headerStyle = {
  height: '50px',

};

const dateStyle = {
  top: '10px',
  left: '50%',
  position: 'relative',
};

class GetData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getData: [],
      startDate: new Date(Date.now()-604600000),
      endDate: new Date(Date.now()),
    }
    this.getData = this.getData.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
  }

  getData(start, end) {
    console.log(start.getTime());



    var url = 'https://vannovervakning.com/api/v1/measurements/1/' + start.getTime()+ '/' + end.getTime();
    if(this.props.type != null){
        url += '/?types=' + this.props.type;
    }

    console.log(url);
    axios.get(url)
    .then( (res) => {
      this.setState({
        getData: res.data,
      });
      this.props.onChange(res.data);
    })
    .catch( (error) => {
      console.log(error);
    });

  }

  handleStartChange(date) {
     this.setState({
       startDate: date,
     });
     this.getData(date, this.state.endDate);
  }
  handleEndChange(date) {

    this.setState({
      endDate: date,
    });
    this.getData(this.state.startDate,date);
  }
  componentDidMount() {
    this.getData(this.state.startDate,this.state.endDate);
  }



  render() {

    if(this.props.norender === true){
      return(null);
    }
      //&emsp means space
  return (
    <div className="header" style={headerStyle}>
          <div className="date" style={dateStyle}>
          Fra:&emsp; 
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleStartChange}
          />
          &emsp;&emsp;
          Til:&emsp;
          <DatePicker
            selected={this.state.endDate}
            selectsEnd

            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleEndChange}
            todayButton={"I dag"}
          />
          </div>
        </div>

    );


  }
}
export default GetData;
