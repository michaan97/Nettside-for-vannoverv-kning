import React, { Component } from 'react';
import GetData from '../../tools/getdata.js';
import {export_table_to_csv} from '../../tools/misc';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const buttonStyle = {
  margin:'2%',
};

const cellStyle = {
    padding:'5px',
    textAlign:'left',
    border: '1px solid black',
};

const headerStyle = {
  padding:'5px',
  textAlign:'left',
  border: '1px solid black',
  backgroundColor: 'rgba(0, 153, 255,1)',
  color:'white',
};

const tableStyle = {
    marginLeft:'5%',
    width:'90%',
    padding:'5px',
    textAlign:'left',
    border: '1px solid black',
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
    this.onLoading = this.onLoading.bind(this);
  }

  onChange(data){
    this.setState({
      getData:data,
      isLoaded:true,
    });
  }
  onLoading(data){
    this.setState({
      isLoaded:false,
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
    table = <div style={{height:'40vh', marginTop:'40vh', right:'50%'}}><Spinner animation="border" role="status" >
                      <span className="sr-only">Loading...</span>
                  </Spinner></div>;
  }
  else {
    if( getData.data === undefined || getData.data.length === 0){
      table =  <div> Fant ingen data. </div>;
    }else{

    const temp = getData.data.TEMPERATURE.map((item, i) => (
        <td style={cellStyle}>{item.value} </td>
      )
    );
    const pH = getData.data.PH.map((item, i) => (
        <td style={cellStyle}>{item.value} </td>
      )
    );

    const cond = getData.data.CONDUCTIVITY.map((item, i) => (
        <td style={cellStyle}>{item.value} </td>
      )
    );

    const rows = getData.data.TURBIDITY.map((item, i) => (
      <tr key={i} >
        {temp[i]}
        {pH[i]}
        {cond[i]}
        <td style={cellStyle}>{item.value} </td>
        <td style={cellStyle}>{item.timeCreated}</td>
      </tr>
      )
    );

    button =
    <Button style={buttonStyle} variant="primary" onClick={this.handleClick}>Last ned data til csv</Button>;

    table = (
      <table id="table" style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Temperatur [°C]</th>
            <th style={headerStyle}>PH</th>
            <th style={headerStyle}>Konduktivitet [ppm]</th>
            <th style={headerStyle}>Turbititet [ntu]</th>
            <th style={headerStyle}>Tid </th>
          </tr>
        </thead>
        <tbody >
          {rows}
        </tbody>
      </table>);
    }
  }
    return (
      <div className="history" style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'top',width:'100%',}}>

      <h1  style={{margin:'2%'}}>Historikk</h1>
      <GetData onChange={this.onChange} onLoading={this.onLoading}/>

      {button}
        <div style={{width:'100%', display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'top',}}>
          {table}
        </div>
        <div style={{height:'20vh'}}/>
      </div>

    );


  }
}
export default History;
