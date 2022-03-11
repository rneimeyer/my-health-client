import { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

const Update = ({ urlBase, activity, setActivity, setView, handleSubmit }) => {
  console.log(urlBase);
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [length, setLength] = useState("");
  const [intensity, setIntensity] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function changeDate(date) {
    const d = new Date(date);
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][d.getMonth()];
    let str = month + " " + d.getDate() + " " + d.getFullYear();
    return str;
  }

  let updatedDate = changeDate(activity.date);

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
    console.log(data);
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
      .then(() => setView(false));
  };

  const updatePage = (event) => {
    handleUpdate(event);
    handleSubmit(event);
  };

  return (
    <div>
      <Card>
        <h2>Update your Activity</h2>
        <p>Please update your activity below!</p>
        <Form onSubmit={updatePage}>
          <div className="date">
            <Form.Control
              onChange={dateHandleChange}
              name="date"
              value={date}
              placeholder={updatedDate}
              required
            ></Form.Control>
          </div>
          <br />
          <div className="activity">
            <label> What activity did you do? </label>
            <Form.Control
              onChange={activityHandleChange}
              name="exercise"
              value={exercise}
              placeholder={activity.exercise}
              required
            ></Form.Control>
          </div>
          <div className="length">
            <label>How long did you work out (in minutes)?</label>
            <Form.Control
              onChange={lengthHandleChange}
              name="length"
              value={length}
              placeholder={activity.length}
              required
            ></Form.Control>
          </div>
          <br />
          <div className="intensity">
            <label> How intense was your activity? </label>
            <Form.Control
              onChange={intensityHandleChange}
              name="intensity"
              value={intensity}
              placeholder={activity.intensity}
              required
            ></Form.Control>
          </div>
          <br />
          <Button
            variant="primary"
            type="submit"
            className="submit-button"
            value="Update"
          >
            Update
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Update;
