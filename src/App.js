import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Temperature from './components/pages/temperature';
import PH from './components/pages/ph';
import Conductivity from './components/pages/conductivity';
import Turbidity from './components/pages/turbidity';
// includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

          <Route exact path='/' component={Homepage} />
          <Route exact path='/Temperature' component={Temperature} />
          <Route exact path='/PH' component={PH} />
          <Route exact path='/Conductivity' component={Conductivity} />
          <Route exact path='/Turbidity' component={Turbidity} />

        <Footer />


      </div>
      </Router>
    );
  }
}

export default App;
