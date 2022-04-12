import React, { useState } from "react";
import WeeklyView from "./../WeeklyView/WeeklyView";
import DailyView from "./../DailyView/DailyView";
import { Form, Button } from "react-bootstrap";
import "./MyHealth.css";
import Weight from "../../assets/weight.png";

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

  return (
    <div className="my-health">
      <h2 className="health-h2">My Health Page</h2>
      {/* returning profile list of the user */}
      <div className="my-health-intro">
        <img
          className="weight"
          src={Weight}
          alt="hand grabbing weight from rack"
        />
        <Form onSubmit={handleSubmit} className="health-form">
          <Form.Group>
            <Form.Label className="label">
              Enter Email to View Your Stats!
            </Form.Label>
            <Form.Control
              onChange={emailHandleChange}
              name="email"
              placeholder="Email"
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="btn-submit">
            Submit
          </Button>
        </Form>
      </div>
      {user.length === 0 ? (
        <div></div>
      ) : (
        <div className="user-profile">
          <h3>{user.firstName}</h3>
          <p>Age : {user.age}</p>
          <WeeklyView urlBase={urlBase} user={user} />
          <DailyView
            urlBase={urlBase}
            user={user}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
