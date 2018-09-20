////////////////////
// JUST A COMPONENT TESTING PAGE
////////////////////

//Importing React Components
import React from "react";
import { Container, Row, Col } from "reactstrap";
//import "./Admin.css";
import NavButtons from "../../NavButtons/";
import DataTable from "../../DataTable/";

class Test extends React.Component {
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
          <form id="book-form">
            <h1>Book List</h1>

            <div>
              <label class="form-label" for="title">
                Title
              </label>
              <input type="text" id="title" class="u-full-width" />
            </div>

            <div>
              <label class="form-label" for="author">
                Author
              </label>
              <input type="text" id="author" class="u-full-width" />
            </div>

            <div>
              <label class="form-label" for="isbn">
                ISBN
              </label>
              <input type="text" id="isbn" class="u-full-width" />
            </div>

            <div id="submit-button-div">
              <input
                id="submit-button"
                href=" #"
                type="submit"
                value="submit"
                class="u-full-width"
              />
            </div>
          </form>

          <table class="u-full-width">
            <thead>
              <tr>
                <th id="th">Title</th>
                <th id="th">Author</th>
                <th id="th">ISBN</th>
                <th id="th" />
              </tr>
            </thead>
            <tbody id="book-list" />
          </table>
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
export default Test;
