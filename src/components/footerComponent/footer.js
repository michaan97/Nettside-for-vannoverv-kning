import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <footer>


        <div className="home">
          <a href="/">Vannovervåkning</a>
        </div>

        <div className="contactInfo">
        Kontaktinformasjon for nettsiden:

        </div>
            <div className="email">
            michaelnilsen97@gmail.com
            </div>


      </footer>

    );
  }
}

export default Footer;
