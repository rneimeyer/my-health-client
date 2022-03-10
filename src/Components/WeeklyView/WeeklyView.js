//weeklyview

import { useState } from "react";

const WeeklyView = ({ urlBase, user }) => {

  

  const activities = user.activity;
  let days = activities.length
  let hours = 0
  let minutes = 0
  let totalIntensity = 0

  console.log(activities.length);
  const list = activities.map((activity) => {
    minutes += activity.length
    if (minutes >= 60) {
      hours += 1
      minutes -= 60
    }

    totalIntensity += activity.intensity

    return (
      <div key={activity._id}>
        <p>{activity.exercise}</p>
      </div>
    );
  });

  let avgIntensity = Math.floor(totalIntensity/days)

  return (
    <div className="weekly-view">
      <h3>Weekly Activity</h3>
      <h4>You exercised for {days} days and a total of {hours} hours and {minutes} minutes</h4>
      <h4>Your average intensity was {avgIntensity}</h4>
      <h4>You did the following activities:</h4>
      <div>{list}</div>
    </div>
  );
};

export default WeeklyView;
