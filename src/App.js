import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { registerLocale, setDefaultLocale } from "react-datepicker";
import nb from 'date-fns/locale/nb';


// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';

import Sensors from './components/pages/sensors';
import Dashboard from './components/pages/dashboard';
import About from './components/pages/about';
import Statistics from './components/pages/statistics';

// includes
import './Assets/css/default.min.css';

registerLocale('nb', nb);
setDefaultLocale('nb');
class App extends Component {

  render() {
    return (
      <Router>



      <div className="App">

          <Route exact path='/' component={Homepage} />
          <Header/>
          {/*<Route path="/:subpath" component= {Header}/> {/*disable header for homepage*/}

          <Route path='/Sensors/*' component={Sensors} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/About' component={About} />

        <Footer />


      </div>
      </Router>
    );
  }
}

export default App;
