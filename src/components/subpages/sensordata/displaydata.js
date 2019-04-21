import React, { Component } from 'react';
import GetData from '../../tools/getdata';
import DisplayChart from './displaychart';
import Spinner from 'react-bootstrap/Spinner';

class DisplayData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      node:this.props.node,
      isLoaded:false,
    };
    this.onChange = this.onChange.bind (this);
    this.onLoading = this.onLoading.bind(this);
  }

  onChange(data){
    this.setState({
      data:data,
      isLoaded:true,
    });
  }

  onLoading(){
    this.setState({
      isLoaded:false,
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

    let spinner = <div style={{height:'40vh', marginTop:'40vh',}}><Spinner animation="border" role="status" >
                      <span className="sr-only">Loading...</span>
                  </Spinner></div>;
    return (
      <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'top',height:'100%', minHeight:'100vh', }}>
        <h1  style={{margin:'2%'}}>
          {this.state.node.title}
        </h1>
        <GetData onChange={this.onChange} node={this.state.node} onLoading={this.onLoading} />
        {this.state.isLoaded ? <DisplayChart type={'TEMPERATURE'} title={'Temperatur'} data={this.state.data} /> : spinner}
        {this.state.isLoaded ?<DisplayChart type={'PH'} title={'PH'} data={this.state.data} /> : spinner}
        {this.state.isLoaded ?<DisplayChart type={'CONDUCTIVITY'} title={'Konduktivitet'} data={this.state.data} /> : spinner}
        {this.state.isLoaded ?<DisplayChart type={'TURBIDITY'} title={'Turbititet'} data={this.state.data} /> : spinner}
        <div style={{height:'20vh'}}/>


      </div>
    );
  }
}

export default DisplayData;
