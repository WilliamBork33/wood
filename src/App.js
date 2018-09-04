import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/';
import Header from './components/Header/';
import Landing from './components/Landing/';
import About from './components/About/';
import Portfolio from './components/Portfolio/';
import Admin from './components/Admin/';
import Navigation from './components/Navigation/';
import Form from './components/Form/';
import SocialLinks from './components/SocialLinks/';
import Footer from './components/Footer/';
import NavButton from "./components/NavButton/";

import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
        
        <Wrapper>

        {/* <Landing/>        
        <About />
        <Portfolio /> */}




        <Router>
            
        <Wrapper>

            <NavButton />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/admin" component={Admin} />

        </Wrapper>
        
        </Router>

        <Footer />
        
        </Wrapper>
     
        
    );
  }
}



export default App;

{/* <Link to={'/about'} </Link> */}