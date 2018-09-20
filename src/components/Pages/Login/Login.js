////////////////////
// LOGIN PAGE FOR OWNER TO ENTER THEIR DASHBOARD
////////////////////

//Importing React Components
import React from "react";
import { Container, Col } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
/* import { Link } from "react-router-dom"; */
import "./Login.css";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Admin from "../Admin";
import NavButtons from "../../NavButtons/";

class Login extends React.Component {
  render() {
    return (
      <div className="aboutpage">
        <div className="loginheader">
          <Col>
            <h1 id="h1-login">Obbagy Contruction</h1>
            <h2 id="h2-login">About Us</h2>
          </Col>

          <NavButtons />

          <br />
        </div>

        <Container id="loginForm">
          <Form>
            <FormGroup>
              <Label for="exampleEmail" />
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" />
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
              />
            </FormGroup>

            <br />

            <button className="nav-item">
              <Link
                to="/admin"
                className={
                  window.location.pathname === "/admin"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Login
              </Link>
            </button>
          </Form>
        </Container>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />
      </div>
    );
  }
}

//Export Component for Use in the Rest of Application.
export default Login;
