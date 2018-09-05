//Importing React Components
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import "./About.css";


//Instruction Div
const About = props => (
    <div className="aboutbox">
        <h1>Obbagy Contruction</h1>
        <h2>About Us</h2>
        
        <Container>
        
        <Row>
          <Col xs="6">Column 1
          <div class="col-md-5"><h3>About Us</h3></div>
          <div class="page-content">
                <img id="pika" src="../pika.jpg" alt="Hunter Obbagy" />
                <p>Hunter Obbagy
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla ac sem est. Etiam mattis, massa quis tristique porttitor, nisl velit gravida mauris, ac egestas tellus nunc et odio.
                    Vestibulum vehicula nulla nec nibh commodo, ac dapibus arcu pharetra. 
                    Cras rhoncus velit ut nulla egestas, ullamcorper eleifend nisl laoreet.
                    Aenean aliquet nibh a augue molestie, quis consectetur augue hendrerit.
                    Aenean elementum risus nec tellus venenatis auctor.                 
                </p>
            </div>

            <p id="resume">- Hunter Obbagy: <a href="./assets/documents/William N. Aaron Bork - Technical Resume (08.09.18).pdf" target="_blank">Hunter Obbagy Resume (August 2018).pdf</a></p>
       
          
          </Col>
          <Col xs="6">.Column 2
          
          <div class="col-md-5"><h3>Services</h3></div>



<div class="panel-group" id="accordion-2" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
            <div class="panel-heading prev-emp activestate" role="tab" id="headingOne">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion-2" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">HEADING 1</a>
                </h4>
            </div>

            <div id="collapseFour" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div class="container panel-body">
                    ***** SOME TEXT *****
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading prev-emp" role="tab" id="headingTwo">
                <h4 class="panel-title">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion-2" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">HEADING 2</a>
                </h4>
            </div>
            <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="container panel-body">
                    ***** SOME TEXT *****
                </div>
            </div>
        </div>

    
        <div class="panel panel-default">
            <div class="panel-heading prev-emp" role="tab" id="headingThree">
                <h4 class="panel-title">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion-2" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">HEADING 3</a>
                </h4>
            </div>
            <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="container panel-body">
                    ***** SOME TEXT *****
                </div>
            </div>
        </div>
    </div>



            <ListGroup flush>
        <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>





          <div id="accordion" id="accordion">                
              
                <div class="card-accordion">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Wood Stuff</button>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body" id="card-body-accordion">Examples, examples, examples, examples.</div>
                    </div>
                </div>
                
                <div class="card-accordion">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Wood Stuff</button>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body" id="card-body-accordion">Examples, examples, examples, examples.</div>
                    </div>
                </div>
               
               <div class="card-accordion">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Wood Stuff</button>
                        </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body" id="card-body-accordion">Examples, examples, examples, examples.</div>
                    </div>
                </div>
               
                <div class="card-accordion">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Wood Stuff</button>
                        </h5>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div class="card-body" id="card-body-accordion">Examples, examples, examples, examples.</div>
                    </div>
                </div>
            </div>


          </Col>
        </Row>
        
      </Container>



    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    

        
    </div>

    

 
  
    
    
    
);

//Export Component for Use in the Rest of Application.
export default About;
