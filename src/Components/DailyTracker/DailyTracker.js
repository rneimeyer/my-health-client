import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./DailyTracker.css";

const DailyTracker = ({ urlBase, people, setPeople }) => {
  const [verification, setVerification] = useState(false);
  const [personLength, setPersonLength] = useState(0);
  const [email, setEmail] = useState("");
  const [personId, setPersonId] = useState("");
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [length, setLength] = useState("");
  const [intensity, setIntensity] = useState("");
  const [allActivities, setAllActivities] = useState([]);
  const [lift, setLift] = useState();

  const emailHandleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    let person = people.filter((n) => n.email === event.target.value);
    setPersonLength(person.length);
    setPersonId(person[0]._id);
    fetch(urlBase + "/person/" + person[0]._id)
      .then((response) => response.json())
      .then((data) => setAllActivities(data.person.activity));
  };

  const putActivity = (activity) => {
    const activitiesCopy = [...allActivities];
    activitiesCopy.push(activity);
    let data = {
      activity: activitiesCopy,
    };
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(urlBase + "/person/" + personId, options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const dateHandleChange = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };

  const activityHandleChange = (event) => {
    event.preventDefault();
    setExercise(event.target.value);
  };

  const lengthHandleChange = (event) => {
    event.preventDefault();
    setLength(event.target.value);
  };

  const intensityHandleChange = (event) => {
    event.preventDefault();
    setIntensity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (personLength === 0) {
      setVerification(true);
    } else {
      setVerification(false);
      let data = {
        date: date,
        exercise: exercise,
        length: length,
        intensity: intensity,
      };
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      fetch(`${urlBase}/person/${personId}`)
        .then((res) => res.json())
        .then((data) => setAllActivities(data.activity));
      fetch(`${urlBase}/activity`, options)
        .then((res) => res.json())
        .then((data) => putActivity(data.activity))
        .then(() => setEmail(""))
        .then(() => setExercise(""))
        .then(() => setDate(""))
        .then(() => setLength(""))
        .then(() => lift());
    }
  };

  return (
    <div className="daily-tracker-body">
      <h2 className="daily-h2"> Welcome to the Daily Tracker</h2>
      <p className="tagline">
        Please input your email and the date to track your activity today!
      </p>
      <div className="tracker-form">
        <Form className="daily-form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={emailHandleChange}
              name="email"
              placeholder="Email"
              value={email}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              onChange={dateHandleChange}
              name="date"
              type="date"
              placeholder="Date"
              value={date}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>What activity did you do?</Form.Label>
            <Form.Select onChange={activityHandleChange} required>
              <option className="option" name="exercise" value="">
                Activity
              </option>
              <option className="option" name="exercise" value="walk">
                Walk
              </option>
              <option className="option" name="exercise" value="run">
                Run
              </option>
              <option className="option" name="exercise" value="bike">
                Bike
              </option>
              <option className="option" name="exercise" value="swim">
                Swim
              </option>
              <option className="option" name="exercise" value="hike">
                Hike
              </option>
              <option className="option" name="exercise" value="yoga">
                Yoga
              </option>
              <option className="option" name="exercise" value="pilates">
                Pilates
              </option>
              <option className="option" name="exercise" value="hiit">
                HIIT
              </option>
              <option className="option" name="exercise" value="sports">
                Sports
              </option>
              <option className="option" name="exercise" value="dance">
                Dance
              </option>
              <option className="option" name="exercise" value="core">
                Core
              </option>
              <option className="option" name="exercise" value="arms">
                Arms
              </option>
              <option className="option" name="exercise" value="legs">
                Legs
              </option>
              <option className="option" name="exercise" value="back">
                Back
              </option>
              <option
                className="option"
                name="exercise"
                value="full-body-strength"
              >
                Full Body Strength
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              onChange={lengthHandleChange}
              name="length"
              type="number"
              placeholder="Length in minutes"
              value={length}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>How intense was your activity?</Form.Label>
            <Form.Select
              onChange={intensityHandleChange}
              className="option"
              required
            >
              <option className="option" name="intensity" value="0">
                Intensity
              </option>
              <option className="option" name="intensity" value="1">
                1
              </option>
              <option className="option" name="intensity" value="2">
                2
              </option>
              <option className="option" name="intensity" value="3">
                3
              </option>
              <option className="option" name="intensity" value="4">
                4
              </option>
              <option className="option" name="intensity" value="5">
                5
              </option>
              <option className="option" name="intensity" value="6">
                6
              </option>
              <option className="option" name="intensity" value="7">
                7
              </option>
              <option className="option" name="intensity" value="8">
                8
              </option>
              <option className="option" name="intensity" value="9">
                9
              </option>
              <option className="option" name="intensity" value="10">
                10
              </option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" value="Submit" className="daily-btn">
            Submit
          </Button>
        </Form>
        {verification === false ? (
          <div></div>
        ) : (
          <div className="unverified">
            <h1>
              We do not have record of your email. Please create an account to
              continue.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyTracker;
