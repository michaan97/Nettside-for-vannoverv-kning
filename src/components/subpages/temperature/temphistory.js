import React, { Component } from 'react';
import GetData from '../../tools/getdata.js';
import {export_table_to_csv} from '../../tools/misc';

const buttonStyle = {

  position: 'relative',
  left:'75%',
};

class Temphistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      getData:[],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(data){
    console.log(data);
    this.setState({
      getData:data,
      isLoaded:true,
    });
  }
  componentDidMount() {
    //this.getData(this.state.startDate,this.state.endDate);
  }

  handleClick(e, html) {
      export_table_to_csv(html, "data.csv");
  }

  render() {
  var { isLoaded, getData } =this.state;
  let table =<div> Loading... </div>;
  let button =null;
  if (!isLoaded) {
    table = <div> Loading... </div>;
  }
  else {
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
    button =
    <button style={buttonStyle} onClick={this.handleClick}>
      Last ned data til csv
    </button>;
    table = (
      <table id="table">
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

      <GetData onChange={this.onChange} type ="TEMPERATURE"/>
        <div>
        {button}
          {table}
        </div>
      </div>

    );


  }
}
export default Temphistory;
