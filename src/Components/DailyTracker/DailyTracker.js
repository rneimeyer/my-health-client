import { useState, useEffect } from "react";

const DailyTracker = ({ urlBase, people, setPeople }) => {
  const [email, setEmail] = useState("");
  const [personId, setPersonId] = useState("");
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [length, setLength] = useState("");
  const [intensity, setIntensity] = useState("");
  const [allActivities, setAllActivities] = useState([]);

  const emailHandleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    let person = people.filter((n) => n.email === event.target.value);
    setPersonId(person[0]._id);
    fetch(urlBase + "/person/" + person[0]._id)
      .then((response) => response.json())
      .then((data) => setAllActivities(data.person.activity));
  };

  //see if we need later
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
      .then(()=>setExercise(""))
      .then(() => setDate(""))
      .then(() => setLength(""));
  };

  return (
    <div>
      <h1> Welcome to the Daily Tracker</h1>
      <h2>
        Please input your email and the date to track your activity today!
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="email">
          <input
            onChange={emailHandleChange}
            name="email"
            value={email}
            placeholder="Email"
          ></input>
        </div>
        <br />
        <div className="date">
          <input
            onChange={dateHandleChange}
            name="date"
            placeholder="Date"
            value={date}
          ></input>
        </div>
        <br />
        <div className="activity">
          <label> What activity did you do? </label>
          <select
            onChange={activityHandleChange}
            className="dropdown"
            id="activity-type"
          >
            <option className="option" name="exercise" value=""></option>
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
          </select>
        </div>
        <div onChange={lengthHandleChange} className="length">
          <input
            name="length"
            value={length}
            placeholder="Length in minutes"
          ></input>
        </div>
        <br />
        <div className="intensity">
          <label> How intense was your activity? </label>
          <select
            onChange={intensityHandleChange}
            className="dropdown"
            id="activity-type"
          >
            <option className="option" name="intensity" value=""></option>
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
          </select>
        </div>
        <br />
        <input className="submit-button" type="submit"></input>
      </form>
    </div>
  );
};

export default DailyTracker;
