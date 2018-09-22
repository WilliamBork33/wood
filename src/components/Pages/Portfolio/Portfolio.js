////////////////////
// PAGE TO DISPLAY RECENT WORK
////////////////////

//Importing React Components
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import "./Portfolio.css";
import NavButtons from "../../NavButtons/";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfoliopage">
        <div className="portfolioheader">
          <Col>
            <h1 id="h1-portfolio">Obbagy Contruction</h1>
            <h2 id="h2-portfolio">Portfolio</h2>
          </Col>

          <NavButtons />

          <br />
        </div>

        <Container>
          <Row>
            <Col>
              <h3 id="h3-about">Recent Works</h3>
            </Col>
            <CardDeck>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="http://2.bp.blogspot.com/-4ijCTB1mX1I/UwzHg4CmKUI/AAAAAAAABm8/C5VtnhHdmFQ/s1600/Wooden-Stairs-Design-details.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Sed Expedita</CardTitle>
                  <CardSubtitle>Dignissimos</CardSubtitle>
                  <CardText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos enim dolor iusto magnam rem laborum
                    exercitationem recusandae dolores debitis architecto ratione
                    quis vero officiis excepturi, sed expedita veniam beatae
                    quam.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://www.alliancewoodworking.com/wp-content/uploads/2013/12/Baseboard-9.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Sit Amet</CardTitle>
                  <CardSubtitle>Vero Officiis</CardSubtitle>
                  <br />
                  <CardText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos enim dolor iusto magnam rem laborum
                    exercitationem recusandae dolores debitis architecto ratione
                    quis vero officiis excepturi, sed expedita veniam beatae
                    quam.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="http://1.bp.blogspot.com/-6XTCJ_Db6jA/VrIcgOEkHrI/AAAAAAAAAFw/AEHNwDj6b4U/s1600/wooden%2Bstorage%2Bcabinets%2Bwith%2Bdoors%2Band%2Bshelves.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Dolor Iusto</CardTitle>
                  <CardSubtitle>Iusto magnam rem</CardSubtitle>
                  <br />
                  <CardText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos enim dolor iusto magnam rem laborum
                    exercitationem recusandae dolores debitis architecto ratione
                    quis vero officiis excepturi, sed expedita veniam beatae
                    quam.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </CardDeck>
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
export default Portfolio;
