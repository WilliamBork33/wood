import React from "react";
import { Table } from "reactstrap";
import "./Table.css";
///TRYING TO GET A CONSOLE.LOG TO SHOW THIS WORKS SO I CAN READ SESSION STORAGE AND POPULATE TABLE WITH ENTERED DATA
class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    let parsedArray = [];
    //Function to read session storage and build task list from that
    function readStorage() {
      parsedArray = JSON.parse(sessionStorage.getItem("stringyObject Array:"));
      //Check if parsedArray is empty
      if (parsedArray == null) {
        console.log("Nothing here...");
      } else {
        console.log("iterating");
      }
    }

    //Run Function
    readStorage();
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + event);
  }

  render() {
    return (
      <Table>
        <thead className="Table">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody className="Table">
          <tr>
            <th scope="row">1</th>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

//Export Component for Use in the Rest of Application.
export default DataTable;
