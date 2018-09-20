////////////////////
// FOOTER COMPONENT
////////////////////

//Importing React Components
import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>
          Creator:{" "}
          <a
            href="http://www.williambork.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            williambork.com
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/WilliamBork33"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a href="/login" target="_blank">
            Admin Login
          </a>
        </p>
      </div>
    );
  }
}

//Export Component for Use in the Rest of Application.
export default Footer;
