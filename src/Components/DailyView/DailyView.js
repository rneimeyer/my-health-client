import { useState } from "react";
import Update from "./../Update/Update";
import { Card , Button } from "react-bootstrap";
import './DailyView.css'

const DailyView = ({ urlBase, user, handleSubmit }) => {
  const [view, setView] = useState(false);
  const [activity, setActivity] = useState({});

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
    setView(true);
    let id = event.target.id;
    fetch(`${urlBase}/activity/${id}`)
      .then((response) => response.json())
      .then((data) => setActivity(data.activity));
  };

  const list = activities.map((activity) => {
    let url = `/my-health/update-activity/${activity._id}`;
    return (
      <Card key={activity._id} className="card">
        <p className="card-p">Date: {activity.date}</p>
        <p className="card-p" >Exercise: {activity.exercise}</p>
        <p className="card-p">Length: {activity.length} minutes</p>
        <p className="card-p">Intensity: {activity.intensity}</p>
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
    <div>
      <h3 className="daily-h3">Daily Activity</h3>
      <div>{list}</div>
      {view === false ? (
        <div></div>
      ) : (

        <Update
          urlBase={urlBase}
          activity={activity}
          setActivity={setActivity}
          setView={setView}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default DailyView;
