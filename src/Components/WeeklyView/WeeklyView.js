//weeklyview

import { useEffect } from "react";

const WeeklyView = ({ urlBase, user }) => {
  const activities = user.activity;
  console.log(user);
  const list = activities.map((activity) => {
    return (
      <div>
        <h3>Weekly Activity</h3>
        <p>Date: {activity.date}</p>
        <p>Exercise: {activity.exercise}</p>
        <p>Intensity: {activity.intensity}</p>
      </div>
    );
  });

  return <div>{list}</div>;
};

export default WeeklyView;
