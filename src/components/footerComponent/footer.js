import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

      
        <div className="home">
          <a href="/">Vannovervåkning</a>
        </div>

        <div className="contactInfo">
        Kontaktinformasjon:

        </div>

        <nav >
          <ul>
            <li className="first">
              <a href="/Navn">Navn</a>
            </li>
            <li className="last">
              <a href="/E-post">E-post</a>
            </li>

          </ul>
        </nav>

        <nav className="statistics">
          <ul>
          <li>
            <a href="/Statistikk">Statistikk</a>
          </li>
          </ul>
        </nav>

      </footer>

    );
  }
}

export default Footer;
