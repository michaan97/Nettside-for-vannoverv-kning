import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Temperature extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>
        Temperatur
        </h1>

        <nav>
          <ul>
            <li className="first">
              <Link to="/Temperature/Chart">Grafmålinger</Link>
            </li>
            <li>
              <Link to="/Temperature/Latest">Siste målinger</Link>
            </li>
            <li>
              <Link to="/Temperature/Aggregate">Høyeste, laveste og gjennomsnitt</Link>
            </li>
            <li className="last">
              <Link to="/Temperature/History">Historikk</Link>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default Temperature;
