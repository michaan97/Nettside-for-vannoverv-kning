import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const headerStyle = {
  height: '50px',

};



const dateStyle = {
  top: '10px',
  left: '5vw',
  position: 'relative',
};

class GetData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getData: [],
      startDate: new Date(Date.now()-(1000*60*60*24*  5)),
      endDate: new Date(Date.now()),
      node:{id:1,},
    }
    this.getData = this.getData.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
  }

  getData(start, end, node) {

    var url = 'https://vannovervakning.com/api/v1/measurements/'+ node.id+'/' + start.getTime()+ '/' + end.getTime();
    if(this.props.type != null){
        url += '/?types=' + this.props.type;
    }
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
     this.getData(date, this.state.endDate, this.state.node);
  }
  handleEndChange(date) {

    this.setState({
      endDate: date,
    });
    this.getData(this.state.startDate,date, this.state.node);
  }
  componentDidMount() {
    this.getData(this.state.startDate,this.state.endDate, this.state.node);
  }
  componentWillUnmount(){
    this.setState({
      getData: [],
    });

  }

  componentWillReceiveProps(props){

    if(props.node !== this.props.node){
      this.setState({
        node:props.node,
      })
      this.getData(this.state.startDate,this.state.endDate, props.node);
    }
  }
  render() {
    if(this.props.norender === true){
      return(null);
    }
      //&emsp means space
  return (
    <div className="header" style={headerStyle}>
          <div className="date" style={dateStyle}>

          Fra: &emsp;
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleStartChange}
          />
          &emsp;
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
