//weeklyview

import { useEffect } from "react";

const WeeklyView = ({ urlBase, user }) => {
  const activities = user.activity;
  console.log(user);
  const list = activities.map((activity) => {
    return (
      <div key={activity._id}>
        <p>Date: {activity.date}</p>
        <p>Exercise: {activity.exercise}</p>
        <p>Length: {activity.length} minutes</p>
        <p>Intensity: {activity.intensity}</p>
      </div>
    );
  });

  return (
    <div className="weekly-view">
      <h3>Weekly Activity</h3>
      <div>{list}</div>
    </div>
  );
};

export default WeeklyView;
