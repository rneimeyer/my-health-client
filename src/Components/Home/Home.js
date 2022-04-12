//home

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Home.css";
import Yoga from "../../assets/yoga-mat.png";

const Home = ({ urlBase, people, setPeople }) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: Number,
    weight: Number,
    height: Number,
    mood: "",
  });

  const [verification, setVerification] = useState(false);

  const handleChange = (event) => {
    event.persist();
    setPerson((prevPerson) => {
      const editedPerson = {
        ...prevPerson,
        [event.target.name]: event.target.value,
      };
      return editedPerson;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let emails = people.map((person) => person.email);
    let check = emails.includes(person.email);
    if (check === true) {
      setVerification(true);
    } else {
      setVerification(false);
      fetch(`${urlBase}/person`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(person),
      })
        .then(() => fetch(`${urlBase}/person`))
        .then((response) => response.json())
        .then((data) => setPeople(data.person))
        .then(() =>
          setPerson({
            firstName: "",
            lastName: "",
            email: "",
            age: Number,
            weight: Number,
            height: Number,
            mood: "",
          })
        );
    }
  };

  return (
    <div className="home">
      <h2 className="home-h2">Register to get started!</h2>
      <div className="home-container">
        <Form className="home-form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="label">First Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={person.firstName}
              name="firstName"
              placeholder="First Name"
              className="person-input"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">Last Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={person.lastName}
              name="lastName"
              placeholder="Last Name"
              className="person-input"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={person.email}
              name="email"
              placeholder="Email"
              className="person-input"
              type="email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">Age</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={person.age}
              name="age"
              placeholder="Age in years"
              className="person-input"
              type="number"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">Weight</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={person.weight}
              name="weight"
              placeholder="Weight in lbs"
              className="person-input"
              type="number"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">Height</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={person.height}
              name="height"
              placeholder="Height in inches"
              className="person-input"
              type="number"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">Mood</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={person.mood}
              name="mood"
              placeholder="Ex: happy, excited, nervous, etc."
              className="person-input"
              required
            />
          </Form.Group>
          <Button type="submit" value="Submit" className="register-btn">
            Submit
          </Button>
        </Form>
        <div className="home-img-container">
          <img
            className="home-img"
            src={Yoga}
            alt="yoga mat with weights, resistance bands, and water bottle"
          />
        </div>
      </div>
      {verification === false ? (
        <div></div>
      ) : (
        <div>
          <h1>
            That email is already in use. Please try again with a different
            email.
          </h1>
        </div>
      )}
    </div>
  );
};
export default Home;
