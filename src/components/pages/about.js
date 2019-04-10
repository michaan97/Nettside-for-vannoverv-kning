import React, { Component } from 'react';


const stil = {
  backgroundColor:'white',
};

class About extends Component {
  render() {
    return (
      <div className="container-fluid" style={stil}>
        <h1>
        Om oss
        </h1>
          <p>
          Vi er gruppe 1!
          </p>

      </div>
    );
  }
}

export default About;
