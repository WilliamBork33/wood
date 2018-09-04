import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';


/* 
const About = ({ match }) => ( <div> {match.params.about} </div> ) */

const NavButton = () => (



  <div className="nav nav-index">
    <button className="btn-nav-index">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </button>
    <button className="nav-item">
      <Link
        to="/about"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>
    </button>
    <button className="nav-item">
      <Link
        to="/portfolio"
        className={
          window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
        }
      >
        Portfolio
      </Link>
    </button>
    
  </div>
);

export default NavButton;
