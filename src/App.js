import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/Wrapper/";

import Landing from "../src/components/Pages/Landing";
import About from "./components/Pages/About/";
import Portfolio from "./components/Pages/Portfolio/";
import Login from "./components/Pages/Login/";
import Admin from "./components/Pages/Admin/";
import Quote from "./components/Pages/Quote/";
import Example from "./components/Example/";

import Form from "./components/Form/";
import SocialLinks from "./components/SocialLinks/";
import Footer from "./components/Footer/";
import NavButtons from "./components/NavButtons/";
import NavButton from "./components/NavButtons/";

import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

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
          </Wrapper>
        </Router>

        <Footer />
      </Wrapper>
    );
  }
}

export default App;

////////////////////////////////
//TODO
// Get that local storage to load in table
// Get that same data to save in a database
///////////////////////////////
