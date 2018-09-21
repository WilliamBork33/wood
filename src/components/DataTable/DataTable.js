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

  readFirebase() {
    var ref = firebase.database().ref();

    // Retrieve new posts as they are added to our database
    ref.on(
      "value",
      function(snapshot) {
        console.log(snapshot.val());
        //var newPost = snapshot.val();
        //console.log("Author: " + newPost.author);
        //console.log("Title: " + newPost.title);
        //console.log("Previous Post ID: " + prevChildKey);
      },
      function(error) {
        console.log("Error");
      }
    );
  }

  /* read() {
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
  } */

  render() {
    //Run Function
    //readStorage();

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
