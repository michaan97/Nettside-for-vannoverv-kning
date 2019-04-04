import React, { Component } from 'react';
import GetData from '../../tools/getdata';
import DisplayChart from './displaychart';


class DisplayData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      node:this.props.node,
    };
    this.onChange = this.onChange.bind (this);
  }

  onChange(data){
    this.setState({
      data:data,
    });
  }

  componentWillReceiveProps(props){
    this.setState({
      node:props.node,
    });
  }

  componentWillUnmount(){

  }


  render() {
    console.log("Rendered");
    return (
      <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'top',height:'100%', minHeight:'90vh', }}>
        <h1>
          {this.state.node.title}
        </h1>
        <GetData onChange={this.onChange} node={this.state.node} />

        <DisplayChart type={'TEMPERATURE'} title={'Temperatur'} data={this.state.data} />
        <DisplayChart type={'PH'} title={'PH'} data={this.state.data} />
        <DisplayChart type={'CONDUCTIVITY'} title={'Konduktivitet'} data={this.state.data} />
        <DisplayChart type={'TURBIDITY'} title={'Turbititet'} data={this.state.data} />
      </div>
    );
  }
}

export default DisplayData;
