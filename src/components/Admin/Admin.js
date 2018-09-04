//Importing React Components
import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Admin.css";


//Instruction Div
const Admin = props => (
    <div className="adminbox">
        <h1>Obbagy Construction</h1>
        <h2>Admin Page</h2>
        
        <Container>
        
        <Row>
          <Col xs="6">Column 1</Col>
          <Col xs="6">.Column 2</Col>
        </Row>
        
      </Container>



    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>


        
    </div>

    

 
  
    
    
    
);

//Export Component for Use in the Rest of Application.
export default Admin;
