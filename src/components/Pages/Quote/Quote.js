//Importing React Components
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
/* import { Link } from "react-router-dom"; */
import "./Quote.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from "../Admin";
import NavButtons from "../../NavButtons/";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", value: "" };
    this.state = { value: "", value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    let theValue = this.state.value;
    event.preventDefault();

    let newTaskArray = [];
    let parsedArray = [];

    function saveDataLocally() {
      //Declare variable and assign it what is typed in the form)
      let newTask = `${theValue}`;
      //Set newTask JSON to save in local storage
      sessionStorage.setItem("JSON Task:", newTask);

      //Change newTask JSON to a string
      let stringyObject = JSON.stringify(newTask);
      //Set stringyObject to save in local storage
      sessionStorage.setItem("stringyObject Task:", stringyObject);

      //Push latest input from form into array
      newTaskArray.push(`${theValue}`);
      //Set newTaskArray JSON to save in local storage
      sessionStorage.setItem("JSON Array:", newTaskArray);

      //Change JSON array to a string
      stringyObject = JSON.stringify(newTaskArray);
      //Set stringyObject to save in local storage
      sessionStorage.setItem("stringyObject Array:", stringyObject);

      //Parse stringyObject back to a JSON
      parsedArray = JSON.parse(sessionStorage.getItem("stringyObject Array:"));
      sessionStorage.setItem("Parsed Array:", parsedArray);
    }

    saveDataLocally();
  }

  render() {
    //const name = document.querySelector("name");
    //const email = "email";
    //const phone = "phone";
    //const task = "task";

    //name.addEventListener("keyup", onKey);

    /* function onKey(e) {
      console.log("yep");
    } */

    return (
      <div className="quotepage">
        <div className="quoteheader">
          <Col>
            <h1 id="h1-quote">Obbagy Contruction</h1>
            <h2 id="h2-quote">Get a Quote</h2>
          </Col>

          <NavButtons />

          <br />
        </div>

        <Container id="quoteForm">
          <form id="name" onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Email:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Phone:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Task:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>

          {/*  <Form>
            <FormGroup>
              <Label for="name" />
              <Input type="name" name="name" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email" />
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="phone" />
              <Input type="phone" name="phone" id="phone" placeholder="Phone" />
            </FormGroup>
            <FormGroup>
              <Label for="task" />
              <Input
                type="task"
                name="task"
                id="task"
                placeholder="What can Obbagy Construction do for you?"
              />
            </FormGroup>
            <Button id="submitBtn" color="primary" size="lg">
              <Link
                id="submitLink"
                to="/admin"
                className={
                  window.location.pathname === "/admin"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Login
              </Link>
            </Button>{" "}
            <br />
          </Form> */}
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
export default Quote;
