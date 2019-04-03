import React, { Component } from 'react';
import Homepage from '../pages/homePage';
import {
  Link
} from 'react-router-dom';

import logo from './elsys.png';

class Header extends Component {
  render() {
    return (
      <header>
      <div className="logo">

      <img src={logo} alt=""/>
      Vannovervåkning

      </div>

      <nav>
        <ul>
          <li className="first">
            <Link to="/">Startside</Link>
          </li>
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

      </header>

    );
  }
}

export default Header;
