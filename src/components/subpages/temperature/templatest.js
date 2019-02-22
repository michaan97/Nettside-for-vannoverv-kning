import React, { Component } from 'react';
import Iframe from 'react-iframe'

import {
  Link
} from 'react-router-dom';

class Templatest extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>
        Temperatur
        </h1>

          <Iframe url="http://folk.ntnu.no/michaan/print-last-ten.php"
        width="1450px"
        height="550px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>


      </div>
    );
  }
}

export default Templatest;
