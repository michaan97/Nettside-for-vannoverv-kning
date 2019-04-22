import React, { Component } from 'react';

import river from '../../Assets/Images/background.jpeg';
class Homepage extends Component {
  render() {
    return (
      <div className="homePage">

      <div className="image">
        <img src={river} alt=""/>

        <h1 className="title"> <b>Vannovervåkning</b> </h1>
      </div>
      {/*
      <div className="bar">

      <nav>
        <ul>
          <li>
            <Link to="/Temperature">Temperatur</Link>
          </li>
          <li>
            <Link to="/PH">PH</Link>
          </li>
          <li>
            <Link to="/Conductivity">Konduktivitet</Link>
          </li>
          <li>
            <Link to="/Turbidity">Turbiditet</Link>
          </li>
          <li className="last">
            <Link to="/About">Om oss</Link>
          </li>
        </ul>
      </nav>

      </div>*/}

      </div>
    );
  }
}

export default Homepage;
