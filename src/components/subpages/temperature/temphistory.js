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

class Temphistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      getData: [],
      startDate: new Date(Date.now()-604600000),
      endDate: new Date(Date.now()),
    }

    this.getData = this.getData.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
  }
  getData(start, end) {
      this.setState({
        isLoaded: false,
    });
    console.log(start.getTime());

    var url = 'https://vannovervakning.com/api/v1/measurements/1/';

    url += start.getTime() + '/';
    url +=  end.getTime();
    url += '/?types=TEMPERATURE';
    console.log(url);
    axios.get(url)
    .then( (res) => {
      this.setState({
        isLoaded: true,
        getData: res.data,
      });
      console.log("getData", this.state.getData);
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

  var { isLoaded, getData } = this.state;
  let table =<div> Loading... </div>;

  if (!isLoaded) {
    table = <div> Loading... </div>;
  }
  else {
    console.log("getData", getData);
    if( getData.data === undefined || getData.data.TEMPERATURE === undefined || getData.data.TEMPERATURE.length === 0){
      return <div> No data found. </div>;
    }
    const rows = getData.data.TEMPERATURE.map((item, i) => (
      <tr key={i}>
        <th>{item.number}</th>
        <td>{item.value} </td>
        <td>{item.timeCreated}</td>
      </tr>
      )
    );

    table =   (<table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Value</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>);
  }
    return (
      <div className="history">

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
        {table}
      </div>

    );


  }
}
export default Temphistory;
