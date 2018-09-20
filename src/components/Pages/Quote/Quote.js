////////////////////
// PAGE FOR CLIENTS TO INPUT THEIR DETAILS
////////////////////

//Importing React Components
import React from "react";
import { Container, Col } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
/* import { Link } from "react-router-dom"; */
import "./Quote.css";

import NavButtons from "../../NavButtons/";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
    let quoteInput = this.state.value;

    //Declare const globally and assign it to the Submit Button
    const quoteSubmitButton = document.getElementById("quote-submit");

    //Register EventListener
    quoteSubmitButton.addEventListener("click", eventHandler);

    //Saves data in local storage for testing purposes
    function eventHandler(e) {
      saveDataLocally();
      saveToMongoDB();
    }

    ////////////////////////

    function saveToMongoDB() {
      /*  db.clients.insertOne({
        name: "kitty",
        email: "y@yahoo.com",
        phone: "44",
        task: "stuff"
      }); */
    }

    function saveDataLocally() {
      //Declare Arrays Globally for Local Storage
      let newTaskArray = [];
      let parsedArray = [];

      let newTask;
      let taskInput;
      let stringyObject;

      //Declare variable and assign it what is typed in the form)
      newTask = `${quoteInput}`;
      console.log("JSON Task:", newTask);

      //Change newTask JSON to a string
      stringyObject = JSON.stringify(newTask);
      console.log("stringyObject Task:", stringyObject);
      localStorage.setItem("stringyObject Array:", stringyObject);

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
  }

  render() {
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
          <Form>
            <FormGroup>
              <Label for="name" />
              <Input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                name="name"
                id="name"
                placeholder="Name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="email" />
              <Input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                name="email"
                id="email"
                placeholder="Email"
              />
            </FormGroup>

            <FormGroup>
              <Label for="phone" />
              <Input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                name="phone"
                id="phone"
                placeholder="Phone"
              />
            </FormGroup>

            <FormGroup>
              <Label for="task" />
              <Input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                name="task"
                id="task"
                placeholder="What can Obbagy Construction do for you?"
              />
            </FormGroup>

            <br />

            <input type="submit" id="quote-submit" value="Submit" />
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
export default Quote;
