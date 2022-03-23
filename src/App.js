import './App.css';
import Header from './Header';
import Earn from './Earn';
import React from "react";
import Faq from './Faq';
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
import About from "./About";
import Overview from './Overview';
import Footer from './Footer';
import GitGithub from './GitGithub';
import Ebooks from './Ebooks';
import Privacy from './Privacy';
import Terms from './Terms';
import Productivity from './Productivity';

function App() {
 
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>
          <Route exact path="/earn">
            <Earn />
          </Route>
         
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/eBooks">
            <Ebooks />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/productivity">
            <Productivity />
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
          <Route exact path="/GIT & GITHUB">
            <Header />
            <GitGithub />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
