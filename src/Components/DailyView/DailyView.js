//dailyview js

import { useState } from "react";

const DailyView = ({ urlBase, user }) => {
    const [activities, setActivities] = useState(user.activity)
//   const activities = user.activity;
  console.log(user);

  const handleDelete = (event) => {
    const id = event.target.id;
    console.log(id);
      fetch(`${urlBase}/activity/${id}`, {
          method: 'DELETE'
      })
      .then((response) => response.json())
      .then(() => fetch(`${urlBase}/person/${user._id}`))
      .then((data) => setActivities(data.person.activity))
  }

  const list = activities.map((activity) => {
    return (
      <div key={activity._id}>
        <p>Date: {activity.date}</p>
        <p>Exercise: {activity.exercise}</p>
        <p>Length: {activity.length} minutes</p>
        <p>Intensity: {activity.intensity}</p>
        <button onClick={handleDelete} id={activity._id}>Delete</button>
      </div>
    );
  });

  return (
    <div className="daily-view">
      <h3>Daily Activity</h3>
      <div>{list}</div>
    </div>
  );
};

export default DailyView;
