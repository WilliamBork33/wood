//Importing React Components
import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
/* import { Link } from "react-router-dom"; */
import "./Login.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../../components/Admin/';
import NavButtons from "../NavButtons";

//Instruction Div
const Login = props => (
    <div className="aboutpage">
        <div className="loginheader">
            <Col>
                <h1 id="h1-login">Obbagy Contruction</h1>
                <h2 id="h2-login">About Us</h2>
            </Col>

            <NavButtons />

            <br />
        </div>
        
       <Container>

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
            <Button>
                <Route exact path="/admin" component={Admin} />
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




        





</Container>



    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>


        
    </div>

    

 
  
    
    
    
);

//Export Component for Use in the Rest of Application.
export default Login;
