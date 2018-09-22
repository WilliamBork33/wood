////////////////////
// JUST A COMPONENT FOR TESTING
////////////////////

import React from "react";
import { Table, Button } from "reactstrap";
import "./Example.css";
import NavButtons from "../NavButtons";

class Example extends React.Component {
  render() {
    return <Button color="primary">X</Button>;
  }
}

//Export Component for Use in the Rest of Application.
export default Example;
