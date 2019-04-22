import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';

import logo from './elsys.png';

class Header extends Component {
  render() {
    return (
      <header>

      <Navbar.Brand href="/" className='logo'>
        <img src={logo} alt=""/>
          Vannovervåkning
      </Navbar.Brand>

      <nav>
        <ul>
          <li className="first">
            <Link to="/">Startside</Link>
          </li>
          <li>
            <Link to="/Sensors/Chart#/node-1">Sensordata</Link>
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
