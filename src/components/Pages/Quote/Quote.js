////////////////////
// PAGE FOR CLIENTS TO INPUT THEIR DETAILS
////////////////////

//Importing React Components
import React from "react";
import { Container, Col, Button } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import * as firebase from "firebase";
/* import { Link } from "react-router-dom"; */
import "./Quote.css";

import NavButtons from "../../NavButtons/";

const config = {
  apiKey: "AIzaSyB4B_u9EWpMHxUr_18D6y_TFnc9j2o41mo",
  authDomain: "wood-934f4.firebaseapp.com",
  databaseURL: "https://wood-934f4.firebaseio.com",
  projectId: "wood-934f4",
  storageBucket: "wood-934f4.appspot.com",
  messagingSenderId: "430419689265"
};
firebase.initializeApp(config);

class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", phone: "", task: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  saveFirebase() {
    //let quoteInput = this.state.value;

    var database = firebase.database();

    database.ref("quotes/").push(this.state);

    this.setState({ name: "", email: "", phone: "", task: "" });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

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
      alert("Submitted. Hunter will contact you shortly.");
    }
  }

  render() {
    return (
      <div className="quotepage">
        <div className="quoteheader">
          <Col>
            <h1 id="h1-quote">Obbagy Construction</h1>
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
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                id="name"
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" />
              <Input
                type="text"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                id="email"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone" />
              <Input
                type="text"
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                id="phone"
                placeholder="Phone"
              />
            </FormGroup>
            <FormGroup>
              <Label for="task" />
              <Input
                type="text"
                value={this.state.task}
                onChange={this.handleInputChange}
                name="task"
                id="task"
                placeholder="What can Obbagy Construction do for you?"
              />
            </FormGroup>
            <br />

            <Button onClick={() => this.saveFirebase()} color="primary">
              Get a Quote
            </Button>
          </Form>
        </Container>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}

//Export Component for Use in the Rest of Application.
export default Quote;
