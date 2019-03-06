import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

import axios from 'axios';
import Getting from '../../importValues/getting';

class Tempagg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      getData: []
    }
    this.getData = this.getData.bind(this);
  }
  getData() {
    axios.get('https://vannovervakning.com/api/v1/measurements/1')
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


  componentDidMount() {
    this.getData();
  }


  render() {

      var { isLoaded, items, getData } = this.state;

      if (!isLoaded) {
        return <div> Loading... </div>;
      }
      else {
        console.log("getData", getData);
        return (
          <div className= "Temp">
          <ul>
            <li>
            {getData.data.TEMPERATURE.map(item =>
            {
              return (
                "Current value: "+ item.value + " °C"
              )
            })}
            </li>
            <li>
            {getData.data.TEMPERATURE.map(item =>
            {
              return (
                "Time: "  + item.timeCreated
              )
            })}
            </li>
            <li>
            {getData.data.TEMPERATURE.map(item =>
            {
              return (
                "Position: " + item.position
              )
            })}
            </li>
          </ul>
          </div>
        );
      }
    }
}
export default Tempagg;
