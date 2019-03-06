import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

import axios from 'axios';

class TempLatest extends Component {

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

    const rows = getData.data.TEMPERATURE.map((item) => (
      <tr key={item.id}>
        <th>{1}</th>
        <td>{item.value + " °C"}</td>
        <td>{item.position}</td>
        <td>{item.timeCreated}</td>
      </tr>
      )
    );

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Value</th>
            <th>Position</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  };
  }
}
export default TempLatest;
