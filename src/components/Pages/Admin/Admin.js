//Importing React Components
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Admin.css";
import NavButtons from "../../NavButtons/";
import DataTable from "../../DataTable/";

class Admin extends React.Component {
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
            <Col xs="4">
              <h3 id="h3-about">New Customers</h3>

              <DataTable />
            </Col>
            <Col xs="4">
              <h3 id="h3-about">In-Progress</h3>
            </Col>
            <Col xs="4">
              <h3 id="h3-about">Completed Projects</h3>
            </Col>
          </Row>
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
