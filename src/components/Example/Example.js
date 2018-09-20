////////////////////
// JUST A COMPONENT FOR TESTING
////////////////////

import React from "react";
import { Table, Button } from "reactstrap";
import "./Example.css";
import NavButtons from "../NavButtons";

class Example extends React.Component {
  render() {
    const Name = "Name";
    const Email = "Email";
    const Phone = "Phone";
    const Task = "Task";

    //Declare Consts Globally
    const form = document.querySelector("name");
    const taskInput = document.getElementById("email");
    const heading = document.querySelector("phone");
    const list = document.querySelector("task");

    //Register EventListners
    //form.addEventListener("submit", runEvent);
    //form.addEventListener("submit", onKey);
    //taskInput.addEventListener("submit", onKey);
    //heading.addEventListener("submit", onKey);
    //list.addEventListener("submit", onKey);

    function onKey(e) {
      console.log("yep");
    }

    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{Name}</td>
            <td>{Email}</td>
            <td>{Phone}</td>
            <td>{Task}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

//Export Component for Use in the Rest of Application.
export default Example;
