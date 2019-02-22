import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

      <div className="logo">
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
            <Link to="/Conductivity">Conductivity</Link>
          </li>
          <li className="last">
            <Link to="/Turbidity">Turbidity</Link>
          </li>
        </ul>
      </nav>

      </header>

    );
  }
}

export default Header;
