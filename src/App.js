import './App.css';
import Header from './Header';
import EarnMoney from './EarnMoney';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Main from './Main';
import Html from './Html';
import Css from './Css';
import JavaScript from './JavaScript';
import Jquery from './Jquery';
import Contact from './Contact';
import Overview from './Overview';
import Footer from './Footer';

function App() {
 
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/EARN__MONEY">
            <EarnMoney />
          </Route>
          <Route exact path="/CONTACT">
            <Contact />
          </Route>
          <Route exact path="/OVERVIEW">
            <Header />
            <Overview />
            {/* <Footer/> */}
          </Route>

          <Route exact path="/HTML5">
            <Header />
            <Html />
          </Route>
          <Route exact path="/CSS3">
            <Header />
            <Css />
          </Route>
          <Route exact path="/JAVASCRIPT">
            <Header />
            <JavaScript />
          </Route>
          <Route exact path="/JQUERY">
            <Header />
            <Jquery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
