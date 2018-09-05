import React from "react";
import { Link } from "react-router-dom";
import "./NavButtons.css";

const NavButtons = () => (

    <div className="navbuttons">
        <button className="navbtn-home">
            <Link
                to="/"
                className={
                window.location.pathname === "/" ? "nav-link active" : "nav-link"
                }
            >
                Home
            </Link>
        </button>
        <button className="navbtn-about">
            <Link
                to="/about"
                className={
                window.location.pathname === "/about" ? "nav-link active" : "nav-link"
                }
            >
                About
            </Link>
        </button>
        <button className="navbtn-portfolio">
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

export default NavButtons;
