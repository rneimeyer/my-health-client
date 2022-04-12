import { useState } from "react";
import { Form, Card, Modal, Button } from "react-bootstrap";

const Update = ({
  urlBase,
  activity,
  setActivity,
  handleSubmit,
  show,
  setShow,
  handleClose,
}) => {
  console.log(urlBase);
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [length, setLength] = useState("");
  const [intensity, setIntensity] = useState("");

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
    ][d.getUTCMonth()];
    let str = month + " " + d.getUTCDate() + ", " + d.getUTCFullYear();
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
      .then(() => handleClose());
  };

  const updatePage = (event) => {
    handleUpdate(event);
    handleSubmit(event);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your Activity!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updatePage}>
            <Form.Control
              onChange={dateHandleChange}
              name="date"
              value={date}
              placeholder={updatedDate}
              required
            ></Form.Control>
            <Form.Label> What activity did you do? </Form.Label>
            <Form.Control
              onChange={activityHandleChange}
              name="exercise"
              value={exercise}
              placeholder={activity.exercise}
              required
            ></Form.Control>
            <Form.Label>How long did you work out (in minutes)?</Form.Label>
            <Form.Control
              onChange={lengthHandleChange}
              name="length"
              value={length}
              placeholder={activity.length}
              required
            ></Form.Control>
            <Form.Label> How intense was your activity? </Form.Label>
            <Form.Control
              onChange={intensityHandleChange}
              name="intensity"
              value={intensity}
              placeholder={activity.intensity}
              required
            ></Form.Control>
            <Button
              variant="primary"
              type="submit"
              className="submit-button"
              value="Update"
            >
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Update;
