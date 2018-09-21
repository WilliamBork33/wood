////////////////////
// A TABLE COMPONENT TO SHOW CLIENT INFO INSIDE USER ADMIN PAGE
////////////////////

import React from "react";
import { Table } from "reactstrap";
import "./DataTable.css";
import * as firebase from "firebase";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
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
