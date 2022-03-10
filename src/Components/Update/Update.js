import { useState, useEffect } from "react";
import {Form} from 'react-bootstrap'

const Update = ({ urlBase, activity, setActivity, setView, handleSubmit }) => {

    console.log(urlBase)
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [length, setLength] = useState("");
  const [intensity, setIntensity] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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

  const handleUpdate = (event) => {
    event.preventDefault();
    let data = {
      date: date,
      exercise: exercise,
      length: length,
      intensity: intensity,
    };
    console.log(data)
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${urlBase}/activity/${activity._id}`, options)
      .then((res) => res.json())
      .then((data) => setActivity(data))
      .then(()=>setView(false))
  };

  const updatePage = (event) => {
      handleUpdate(event)
      handleSubmit(event)
  }

  return (
    <div> 
      <h2>Update your Activity</h2>
      <p>
        Please update your activity below!
      </p>
      <Form onSubmit={updatePage}>
          <div className="date">
          <input
            onChange={dateHandleChange}
            name="date"
            value={date}
            placeholder={activity.date} required
          ></input>
        </div>
        <br />
        <div className="activity">
          <label> What activity did you do? </label>
          <input onChange={activityHandleChange} 
            name="exercise"
            value={exercise}
            placeholder={activity.exercise} required
          ></input>
        </div>
        <div className="length">
          <label>How long did you work out (in minutes)?</label>
          <input onChange={lengthHandleChange} 
            name="length"
            value={length}
            placeholder={activity.length} required
          ></input>
        </div>
        <br />
        <div className="intensity">
          <label> How intense was your activity? </label>
          <input onChange={intensityHandleChange}
            name="intensity"
            value={intensity}
            placeholder={activity.intensity} required
          ></input>
        </div>
        <br />
        <input className="submit-button" type="submit" value="Update"></input>
      </Form>
    </div>
  );
};

export default Update;