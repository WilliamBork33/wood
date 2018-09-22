////////////////////
// PAGE FOR INFO ABOUT OWNER
////////////////////

//Importing React Components
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./About.css";
import NavButtons from "../../NavButtons/";

class About extends React.Component {
  render() {
    return (
      <div className="aboutpage">
        <div className="aboutheader">
          <Col>
            <h1 id="h1-about">Obbagy Contruction</h1>
            <h2 id="h2-about">About Us</h2>
          </Col>

          <NavButtons />

          <br />
        </div>

        <Container>
          <Row>
            <Col xs="6">
              <h3 id="h3-about">About Us</h3>
              <div class="page-content">
                <img
                  id="pika"
                  src="https://i.pinimg.com/564x/cd/1b/12/cd1b12a36b861c2a8dfe625bd0ce62ae.jpg"
                  alt="Hunter Obbagy"
                />
                <p>
                  Hunter Obbagy Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla ac sem est. Etiam mattis, massa quis
                  tristique porttitor, nisl velit gravida mauris, ac egestas
                  tellus nunc et odio. Vestibulum vehicula nulla nec nibh
                  commodo, ac dapibus arcu pharetra. Cras rhoncus velit ut nulla
                  egestas, ullamcorper eleifend nisl laoreet. Aenean aliquet
                  nibh a augue molestie, quis consectetur augue hendrerit.
                  Aenean elementum risus nec tellus venenatis auctor.
                </p>
              </div>
              <p id="resume">
                - Hunter Obbagy:{" "}
                <a
                  href="About/William N. Aaron Bork - Technical Resume (08.09.18).pdf"
                  target="_blank"
                >
                  Hunter Obbagy Resume (August 2018).pdf
                </a>
              </p>
            </Col>

            <Col xs="6">
              <h3 id="h3-about">Services</h3>
              <div id="accordion">
                <div class="card-accordion">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Wood Stuff
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body" id="card-body-accordion">
                      Examples, examples, examples, examples.
                    </div>
                  </div>
                </div>
                <div class="card-accordion">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Wood Stuff
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body" id="card-body-accordion">
                      Examples, examples, examples, examples.
                    </div>
                  </div>
                </div>
                <div class="card-accordion">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Wood Stuff
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div class="card-body" id="card-body-accordion">
                      Examples, examples, examples, examples.
                    </div>
                  </div>
                </div>
                <div class="card-accordion">
                  <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Wood Stuff
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div class="card-body" id="card-body-accordion">
                      Examples, examples, examples, examples.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.js"
          integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
          crossorigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        />
      </div>
    );
  }
}

//Export Component for Use in the Rest of Application.
export default About;
