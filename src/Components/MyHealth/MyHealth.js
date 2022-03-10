import React, { useEffect, useState } from "react";
import WeeklyView from "./../WeeklyView/WeeklyView";
import DailyView from "./../DailyView/DailyView";
import {Form, Button} from 'react-bootstrap'
import './MyHealth.css'

export default function MyHealth({ urlBase, people, setPeople }) {
  // creating use state for user
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [personId, setPersonId] = useState("");

  // function for setting the email
  const emailHandleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    let person = people.filter((n) => n.email === event.target.value);
    setPersonId(person[0]._id);
  };

  // function for submitting the email
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    fetch(urlBase + "/person/" + personId)
      .then((response) => response.json())
      .then((data) => setUser(data.person));
  };

  // delete function to delete user
  const handleDelete = (e) => {
    console.log(e.target.value);
    let id = e.target.value;
    fetch(urlBase + "/person/" + id, { method: "DELETE" });
  };

  return (
    <>
      <h3 className="health-h3">My Health Page</h3>
      {/* returning profile list of the user */}
      <Form onSubmit={handleSubmit}className="health-form">
        <div className="email">
          <Form.Control
            onChange={emailHandleChange}
            name="email"
            placeholder="Email"
          ></Form.Control>
        </div>
        <Button variant="primary" type="submit" className="btn-submit">
    Submit
  </Button>
      </Form>
      {user.length === 0 ? (
        <div></div>
      ) : (
        <div className="user-profile">
          <ul>
            {" "}
            <li key={user._id}>Name : {user.firstName}</li>
            <li>Age : {user.age}</li>
            <li>Email : {user.email}</li>
            <Button type="button" value={user._id} onClick={handleDelete} className="delete-btn">
              Delete
            </Button>
          </ul>
          <WeeklyView urlBase={urlBase} user={user} />
          <DailyView urlBase={urlBase} user={user} handleSubmit={handleSubmit}/>
        </div>
      )}
    </>
  );
}
