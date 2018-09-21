////////////////////
// DASHBOARD FOR OWNER TO VIEW CLIENTS
////////////////////

//Importing React Components
import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "./Admin.css";
import NavButtons from "../../NavButtons/";
import DataTable from "../../DataTable/";
import * as firebase from "firebase";

class Admin extends React.Component {
  readFirebase() {
    var clientDBRef = firebase.database().ref("quotes/");

    clientDBRef.on("child_added", function(data, prevChildKey) {
      var clients = data.val();
      //console.log(clients);
      //console.log("name: " + clients.name);
      //console.log("email: " + clients.email);
      //console.log("phone: " + clients.phone);
      //console.log("task:" + prevChildKey);

      //console.log(clients);
      //var i;

      //for (i = 0; i < clients.value.length; i++) {
      //console.log(parsedJoke.value[i]);

      // Declare let and assign it value of the joke text
      //let joke = clients; parsedJoke.value[i].joke;
      console.log(clients);
      console.log("name: " + clients.name);
      console.log("email: " + clients.email);
      console.log("phone: " + clients.phone);
      console.log("task:" + prevChildKey);

      // Declare let and assign it value of "joke"
      let outputName = clients.name;
      let outputEmail = clients.email;
      let outputPhone = clients.phone;
      let outputTask = clients.task;

      // Function paint "outputs" to the screen
      function addOutput() {
        const list = document.getElementById("table-template");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${""}</td> <td>${outputName}</td> <td>${outputEmail}</td> <td>${outputPhone}</td> <td>${outputTask}</td></td>
        <td><a href="#" class="delete">X</a></td>`;

        list.appendChild(row);
      }

      // Run Function
      addOutput();
    });
  }

  componentDidMount() {
    this.readFirebase();
  }

  render() {
    return (
      <div className="adminpage">
        <div className="adminheader">
          <Col>
            <h1 id="h1-login">Obbagy Contruction</h1>
            <h2 id="h2-login">Admin Dashboard</h2>
          </Col>

          <NavButtons />

          <br />
        </div>

        <Container>
          <Row>
            <Col xs="12">
              <h3 id="h3-about">New Customers</h3>

              <Table>
                <thead className="Table" id="table-template">
                  <tr>
                    <th />
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Task</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="Table">
                  <tr>
                    <th scope="row" />
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                  </tr>
                </tbody>
              </Table>

              <ul class="clients-table" id="clients-table" />

              {/*   <DataTable /> */}
            </Col>
            {/*}
            <Col xs="4">
              <h3 id="h3-about">In-Progress</h3>
            </Col>
            <Col xs="4">
              <h3 id="h3-about">Completed Projects</h3>
            </Col>
            */}
          </Row>
          <Col xs="12">
            <h3 id="h3-about">In-Progress</h3>

            <ul class="clients-table" id="clients-table" />

            {/*   <DataTable /> */}
          </Col>
          <Row />
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
export default Admin;
