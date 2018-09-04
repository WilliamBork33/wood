//Importing React Components
import React from "react";
import "./Landing.css";
import NavButton from "../NavButton/";
import { Button } from 'reactstrap';


//Instruction Div
const Landing = props => (
    <div className="instructionsbox">
        <h1>Obbagy Contruction</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>

       
    
        <NavButton color="danger">Home</NavButton>
        <Button color="danger">Home</Button>
    
        <h4>Contact Us:</h4>
        <h4>hunter@obbagyconstruction.com</h4>
        <h4>219-123-4567</h4>
        
        
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>

        
    </div>
  
    
    
    
);

//Export Component for Use in the Rest of Application.
export default Landing;