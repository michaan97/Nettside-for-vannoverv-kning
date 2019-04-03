import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,Switch,
} from 'react-router-dom';
import { registerLocale, setDefaultLocale } from "react-datepicker";
import nb from 'date-fns/locale/nb';


// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Temperature from './components/pages/temperature';
import PH from './components/pages/ph';
import Conductivity from './components/pages/conductivity';
import Turbidity from './components/pages/turbidity';
import About from './components/pages/about';
import Statistics from './components/pages/statistics';


import Tempagg from './components/subpages/temperature/tempagg';
import Tempchart from './components/subpages/temperature/tempchart';
import Temphistory from './components/subpages/temperature/temphistory';
import Templatest from './components/subpages/temperature/templatest';
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

          <Route exact path='/Temperature' component={Temperature} />
          <Route exact path='/PH' component={PH} />
          <Route exact path='/Conductivity' component={Conductivity} />
          <Route exact path='/Turbidity' component={Turbidity} />
          <Route exact path='/About' component={About} />

          <Route exact path='/Temperature/Aggregate' component={Tempagg} />
          <Route exact path='/Temperature/Chart' component={Tempchart} />
          <Route exact path='/Temperature/Latest' component={Templatest} />
          <Route exact path='/Temperature/History' component={Temphistory} />

          <Route exact path='/Statistikk' component={Statistics} />

        <Footer />


      </div>
      </Router>
    );
  }
}

export default App;
