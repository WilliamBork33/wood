////////////////////
// MAIN REACT APP FILE
////////////////////

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Wrapper from "./components/Wrapper/";

import Landing from "../src/components/Pages/Landing";
import About from "./components/Pages/About/";
import Portfolio from "./components/Pages/Portfolio/";
import Login from "./components/Pages/Login/";
import Admin from "./components/Pages/Admin/";
import Quote from "./components/Pages/Quote/";
import SocialLinks from "./components/SocialLinks/";
import Footer from "./components/Footer/";

//import Example from "./components/Example/";
//import Test from "./components/Pages/Test/";
//import NavButtons from "./components/NavButtons/";

class App extends Component {
  render() {
    return (
      <Wrapper>
        {/* <Landing/>        
        <About />
        <Portfolio /> */}

        <Router>
          <Wrapper>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/quote" component={Quote} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            {/*  <Route exact path="/test" component={Test} /> */}
          </Wrapper>
        </Router>

        <Footer />
      </Wrapper>
    );
  }
}

export default App;
