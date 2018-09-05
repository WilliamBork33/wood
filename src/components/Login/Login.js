//Importing React Components
import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
/* import { Link } from "react-router-dom"; */
import "./Login.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../../components/Admin/';

//Instruction Div
const Login = props => (
    <div className="adminbox">
        <h1>Obbagy Construction</h1>
        <h2>Login Page</h2>
        
        <Container>
        
        <Row>
          <Col xs="6">Column 1</Col>
          <Col xs="6">.Column 2</Col>
        </Row>
        
      </Container>

      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        


        <Router>
        <Button>Submit
            
            <Route exact path="/admin" component={Admin} />
             {/*    <Link
            to="/admin"
            className={
            window.location.pathname === "/admin" ? "nav-link active" : "nav-link"
            }
        >
            Submit
        </Link> */}
            
        </Button>
        </Router>


 <button className="nav-item">
      <Link
        to="/admin"
        className={
          window.location.pathname === "/admin" ? "nav-link active" : "nav-link"
        }
      >
        Admin
      </Link>
    </button>


      </Form>




        









    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>


        
    </div>

    

 
  
    
    
    
);

//Export Component for Use in the Rest of Application.
export default Login;
