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
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    //console.log(this.state.value);
    let quoteInput = this.state.value;
    //console.log(quoteInput);

    //Declare const globally and assign it to the Clear Tasks button
    const quoteSubmitButton = document.getElementById("quote-submit");

    quoteSubmitButton.addEventListener("click", eventHandler);

    function eventHandler(e) {
      //console.log("Quote Submitted");
      //alert("Quote");

      saveDataLocally();
    }

    //Declare Arrays Globally for Local Storage
    let newTaskArray = [];
    let parsedArray = [];

    let newTask;
    let taskInput;
    let stringyObject;

    function saveDataLocally() {
      //Declare variable and assign it what is typed in the form)
      newTask = `${quoteInput}`;
      console.log("JSON Task:", newTask);

      //Change newTask JSON to a string
      stringyObject = JSON.stringify(newTask);
      console.log("stringyObject Task:", stringyObject);
      localStorage.setItem("stringyObject Array:", stringyObject);

      ///NEXT GET LOCAL STORAGE TO LOAD IN TABLE.JS tables

      //Push latest input from form into array
      //newTaskArray.push(`${quoteInput}`);
      //console.log("JSON Array:", newTaskArray);

      //Change JSON array to a string
      //stringyObject = JSON.stringify(newTaskArray);
      //Set stringyObject to save in local storage
      //localStorage.setItem("stringyObject Array:", stringyObject);
      //console.log("stringyObject Array:", stringyObject);

      //Parse stringyObject back to a JSON
      //parsedArray = JSON.parse(localStorage.getItem("stringyObject Array:"));
      //localStorage.setItem("Parsed Array:", parsedArray);
      //console.log("Parsed Array:", parsedArray);
    }
    /* 
  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    let theValue = this.state.value;
    console.log(theValue);
    console.log("hS");
    event.preventDefault();
 */
    ////////////////////////////
    //SAVE TO LOCAL STORAGE (RAN INSIDE runEvent FUNCTION)
    //Displays data in JSONs, Strings, and Arrays in developer console / application
    ////////////////////////////
    /* 
    //Declare Arrays Globally for Local Storage
    let newTaskArray = [];
    let parsedArray = [];

    function saveDataLocally() {
      //Declare variable and assign it what is typed in the form)
      newTask = `${taskInput.value}`;
      console.log("JSON Task:", newTask);

      //Change newTask JSON to a string
      stringyObject = JSON.stringify(newTask);
      console.log("stringyObject Task:", stringyObject);

      //Push latest input from form into array
      newTaskArray.push(`${taskInput.value}`);
      console.log("JSON Array:", newTaskArray);

      //Change JSON array to a string
      stringyObject = JSON.stringify(newTaskArray);
      //Set stringyObject to save in local storage
      localStorage.setItem("stringyObject Array:", stringyObject);
      console.log("stringyObject Array:", stringyObject);

      //Parse stringyObject back to a JSON
      parsedArray = JSON.parse(localStorage.getItem("stringyObject Array:"));
      localStorage.setItem("Parsed Array:", parsedArray);
      console.log("Parsed Array:", parsedArray);

      //Function to save new tasks into local storage
      saveDataLocally();
    } */
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

            <input type="submit" id="quote-submit" value="Submit" />
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
