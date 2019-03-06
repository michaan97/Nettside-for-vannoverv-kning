import React, { Component } from 'react';

class Getting extends Component {
  render() {
    return (
      <div>
        <div> values: {this.data.value} </div>
        <div> timeCreated: {this.data.timeCreated} </div>
        <div> position: {this.data.position} </div>
      </div>
    );
  }
}

export default Getting;
