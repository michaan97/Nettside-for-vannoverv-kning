import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

      <div className="contactInfo">
      Kontaktinformasjon

      </div>

      <nav>
        <ul>
          <li className="first">
            <a href="#">Navn</a>
          </li>
          <li className="last">
            <a href="#">E-post</a>
          </li>
        </ul>
      </nav>

      </footer>

    );
  }
}

export default Footer;
