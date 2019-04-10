import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DisplayData from '../subpages/sensordata/displaydata';
import History from '../subpages/sensordata/history';

import {lastHeard, status, toTime} from '../tools/misc';
import Badge from 'react-bootstrap/Badge';


import Statistics from './statistics';
import {
  Link,Switch,Route
} from 'react-router-dom';

const sideBarStyle = {
  background:'black',
  color:'white',
  position:'relative',
  left:'0px',
  top:'0px',
  width:'200px',
  minHeight:'90vh',
};
const listStyle ={
  listStyle:'none',
  color:'white',
  position:'relative',
  top:'20px',
  left:'-20px'
};
const linkStyle ={
  color:'white',
  marginTop:'10px',
  fontSize:'1rem',
};

const containerStyle ={
  top:'0px',
  position:'relative',
  right:'0px',
  width:'100%',
  height:'100%',
  minHeight:'90vh',
};

class Sensors extends Component {

  constructor(props) {
    super(props);
    this.state = {

      subpage:"/Chart",

      status:false,
      isLoaded:false,

      location: [
      {
          id: 1,
          title: 'Node 1',
          selected: false,
          key: 'location'
      },
      {
        id: 2,
        title: 'Node 2',
        selected: false,
        key: 'location'
      },
      {
        id: 3,
        title: 'Node 3',
        selected: false,
        key: 'location'
      },
      {
        id: 4,
        title: 'Node 4',
        selected: false,
        key: 'location'
      },
      {
        id: 5,
        title: 'Node 5',
        selected: false,
        key: 'location'
      },
      {
        id: 6,
        title: 'Node 6',
        selected: false,
        key: 'location'
      },
      {
        id: 7,
        title: 'Node 7',
        selected: false,
        key: 'location'
      },
      {
        id: 8,
        title: 'Node 8',
        selected: false,
        key: 'location'
      }
    ],
    node:0,

    }
    this.state.node = this.state.location[0];
    this.onChange = this.onChange.bind(this);

  }


  onChange(props){
  }

  componentWillReceiveProps(props){
    var page = props.location.pathname.replace("/Sensors","");
    var number = props.location.hash[2];
    if(this.state.location.length >=number){
      this.setState({
        node:this.state.location[number - 1],
        isLoaded:false,
      }, () => {
        status(this.state.node.id).then(online =>{
          this.setState({
            status:online,
            isLoaded:true,
          });
        });
      });
    }
    this.setState({  subpage:page,});


  }
  componentDidMount(){
    status(this.state.node.id).then(online =>{
      this.setState({
        status:online,
        isLoaded:true,
      });
    });
  }

  render() {


    var container = null;
    console.log(this.state.subpage);
    switch (this.state.subpage) {
      case "/Chart":
      container = <DisplayData node={this.state.node}/>;

        break;
      case "/History":

      container = <History node={this.state.node}/>;
        break;
      case "/Statistics":
      container = <Statistics node={this.state.node}/>;
        break;
      default:

    }
    let status = <div></div>;
    if(this.state.isLoaded === true){
      if(this.state.status){
        status =  <Badge variant="success">Online</Badge> ;
      }else{
        status =  <Badge variant="danger">Offline</Badge>;
      }
    }

    return (
      <div className="container-fluid" style={{position:'relative', flexDirection:'row', display:'flex',}}>
      <div className="sideBar" style={sideBarStyle}>
        <nav>
          <ul style={listStyle}>

            <h2> {this.state.node.title} </h2>
            {status}


            <DropdownButton id="dropdown-basic-button" title="Velg node" >
              <Dropdown.Item href="#/1">Node 1</Dropdown.Item>
              <Dropdown.Item href="#/2">Node 2</Dropdown.Item>
              <Dropdown.Item href="#/3">Node 3</Dropdown.Item>
              <Dropdown.Item href="#/4">Node 4</Dropdown.Item>
              <Dropdown.Item href="#/5">Node 5</Dropdown.Item>
              <Dropdown.Item href="#/6">Node 6</Dropdown.Item>
              <Dropdown.Item href="#/7">Node 7</Dropdown.Item>
              <Dropdown.Item href="#/8">Node 8</Dropdown.Item>
            </DropdownButton>


            <li className="first" style={linkStyle}>
              <Link to="/Sensors/Chart" style={linkStyle}>Grafmålinger</Link>
            </li>
            <li  style={linkStyle}>
              <Link to="/Sensors/Statistics"style={linkStyle}>Høyeste, laveste og gjennomsnitt</Link>
            </li>
            <li className="last"  style={linkStyle}>
              <Link to="/Sensors/History"style={linkStyle}>Historikk</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div style={containerStyle}>
        {container}
      </div>
      </div>
    );
  }
}

export default Sensors;
