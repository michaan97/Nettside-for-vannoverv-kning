import React, { Component } from 'react';
import GetData from '../../tools/getdata.js';
import {export_table_to_csv} from '../../tools/misc';

const buttonStyle = {

  position: 'relative',
  left:'75%',
};

class History extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      getData:[],
      node:this.props.node,
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

  componentWillReceiveProps(props){
    this.setState({
      node:props.node,
    });

  }
  render() {
  var { isLoaded, getData } =this.state;
  let table =<div> Loading... </div>;
  let button =null;
  if (!isLoaded) {
    table = <div> Loading... </div>;
  }
  else {
    if( getData.data === undefined || getData.data.length === 0){
      table =  <div> Fant ingen data. </div>;
    }else{

    const temp = getData.data.TEMPERATURE.map((item, i) => (
        <td>{item.value} </td>
      )
    );
    const pH = getData.data.PH.map((item, i) => (
        <td>{item.value} </td>
      )
    );

    const cond = getData.data.CONDUCTIVITY.map((item, i) => (
        <td>{item.value} </td>
      )
    );

    const rows = getData.data.TURBIDITY.map((item, i) => (
      <tr key={i}>
        {temp[i]}
        {pH[i]}
        {cond[i]}
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
            <th>Temperatur</th>
            <th>PH</th>
            <th>Konduktivitet</th>
            <th>Turbititet</th>
            <th>Tid </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>);
    }
  }
    return (
      <div className="history">

      <GetData onChange={this.onChange}/>
        <div>
        {button}
          {table}
        </div>
      </div>

    );


  }
}
export default History;
