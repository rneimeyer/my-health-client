import { useState } from "react";
import Update from "./../Update/Update";
import { Card, Button } from "react-bootstrap";
import "./DailyView.css";

const DailyView = ({ urlBase, user, handleSubmit }) => {
  const [activity, setActivity] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const activities = user.activity;
  const handleDelete = (id) => {
    fetch(`${urlBase}/activity/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  };

  const refreshPage = (event) => {
    handleDelete(event.target.id);
    handleSubmit(event);
  };

  const showUpdate = (event) => {
    let id = event.target.id;
    fetch(`${urlBase}/activity/${id}`)
      .then((response) => response.json())
      .then((data) => setActivity(data.activity));
    handleShow();
  };

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

  function dayOfWeek(date) {
    const d = new Date(date);
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][d.getUTCDay()];
    return day;
  }

  const list = activities.map((activity) => {
    let url = `/my-health/update-activity/${activity._id}`;
    let dateUpdate = changeDate(activity.date);
    let weekDay = dayOfWeek(activity.date);
    return (
      <Card key={activity._id} className="card">
        <Card.Title>{weekDay}</Card.Title>
        <Card.Text>Date: {dateUpdate}</Card.Text>
        <Card.Text>Exercise: {activity.exercise}</Card.Text>
        <Card.Text>Length: {activity.length} minutes</Card.Text>
        <Card.Text>Intensity: {activity.intensity}</Card.Text>
        <Button className="btn-del" onClick={refreshPage} id={activity._id}>
          Delete
        </Button>
        <Button onClick={showUpdate} id={activity._id}>
          Update Activity
        </Button>
      </Card>
    );
  });

  return (
    <div className="daily-view">
      <h3 className="daily-h3">Daily Activity</h3>
      <div className="activity-list">{list}</div>
      <Update
        urlBase={urlBase}
        activity={activity}
        setActivity={setActivity}
        handleSubmit={handleSubmit}
        show={show}
        setShow={setShow}
        handleClose={handleClose}
      />
    </div>
  );
};

export default DailyView;
