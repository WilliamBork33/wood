////////////////////
// DASHBOARD FOR OWNER TO VIEW CLIENTS
////////////////////

//Importing React Components
import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "./Admin.css";
import NavButtons from "../../NavButtons/";
import DataTable from "../../DataTable/";
//import Example from "../../Example";
import * as firebase from "firebase";

class Admin extends React.Component {
  readFirebase() {
    var clientDBRef = firebase.database().ref("quotes/");

    clientDBRef.on("child_added", function(data, prevChildKey) {
      var clients = data.val();

      let listNumber = 1;
      let outputName = clients.name;
      let outputEmail = clients.email;
      let outputPhone = clients.phone;
      let outputTask = clients.task;

      // Function paint "outputs" to the screen
      function addOutput() {
        const list = document.getElementById("table-template");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${listNumber}</td> <td>${outputName}</td> <td>${outputEmail}</td> <td>${outputPhone}</td> <td>${outputTask}</td></td>
      <td><a href="#" class="move" id="move"><></a></td> <td><button className="delete" id="delete">Delete</button></td`;

        list.appendChild(row);
      }

      // Run Function
      addOutput();
    });

    ////////////////////////////////////////
    // DELETE ONE
    ////////////////////////////////////////
    function deleteOneFirebase() {
      var clientDBRef = firebase.database().ref("quotes/");
      clientDBRef.child("quotes/").remove();
      console.log("ddddddddddddddddd");
    }
    deleteOneFirebase();
  }
  ////////////////////////////////////////
  // DELETE ONE
  ////////////////////////////////////////

  componentDidMount() {
    this.readFirebase();
  }

  ////////////////////////////////////////
  //
  ////////////////////////////////////////

  render() {
    return (
      <div className="adminpage">
        <div className="adminheader">
          <Col>
            <h1 id="h1-login">Obbagy Construction</h1>
            <h2 id="h2-login">Admin Dashboard</h2>
          </Col>

          <NavButtons />

          <br />
        </div>

        <Container>
          <Row>
            <Col xs="12">
              <h3 id="h3-about">New Clients</h3>

              <Table>
                <thead className="Table" id="table-template">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Task</th>
                    <th>Action</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="clients-table" id="clients-table" />
              </Table>
            </Col>
          </Row>
          <Col xs="12">
            <h3 id="h3-about">In-Progress</h3>
            <Table>
              <thead className="Table" id="table-template">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Task</th>
                  <th>Action</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="clients-table" id="clients-table" />
            </Table>
            {/*  <DataTable /> */}
          </Col>

          <Col xs="12">
            <h3 id="h3-about">Completed</h3>
            <Table>
              <thead className="Table" id="table-template">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Task</th>
                  <th>Action</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="clients-table" id="clients-table" />
            </Table>
          </Col>
          <Row />
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
export default Admin;
