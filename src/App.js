import './App.css';
import Header from './Header';
import EarnMoney from './EarnMoney';
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
import Contact from './Contact';
import About from "./About";
import Overview from './Overview';
import Footer from './Footer';
import GitGithub from './GitGithub';
import Ebooks from './Ebooks';
import Privacy from './Privacy';
import Terms from './Terms';

function App() {
 
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>
          <Route exact path="/EARN__MONEY">
            <EarnMoney />
          </Route>
          <Route exact path="/CONTACT">
            <Contact />
          </Route>
          <Route exact path="/ABOUT">
            <About />
          </Route>
          <Route exact path="/FAQ">
            <Faq />
          </Route>
          <Route exact path="/eBooks">
            <Ebooks />
          </Route>
          <Route exact path="/PRIVACY">
            <Privacy />
          </Route>
          <Route exact path="/TERMS">
            <Terms />
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
