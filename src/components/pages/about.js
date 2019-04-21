import React, { Component } from 'react';

import hei from "../../Assets/Images/river.jpg";
const stil = {
  width:'100%',
  
};

class About extends Component {
  render() {
    return (
      <div className="container-fluid" style={stil}>
        <h1>
        Om oss
        </h1>
        <img src={hei} alt={""} style={stil}/>

          <p>
          Vi er gruppe 1!
          </p>

      </div>
    );
  }
}

export default About;
