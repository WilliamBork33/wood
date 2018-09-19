import React from "react";
import { Table } from "reactstrap";
import "./DataTable.css";
///TRYING TO GET A CONSOLE.LOG TO SHOW THIS WORKS SO I CAN READ SESSION STORAGE AND POPULATE TABLE WITH ENTERED DATA
class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let parsedArray = [];
    //Function to read session storage and build task list from that
    function readStorage() {
      let parsedArray = JSON.parse(
        localStorage.getItem("stringyObject Array:")
      );
      //Check if parsedArray is empty
      if (parsedArray == null) {
        console.log("Nothing here...");
      } else {
        console.log(parsedArray);
        //return parsedArray;
      }
    }
    var x = parsedArray;

    //Run Function
    readStorage();

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
            <td>{x}</td>
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
