//weeklyview

import { useState } from "react";
import {Table} from 'react-bootstrap'

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
      <h3 className="weekly-h3">Weekly Activity</h3>
      <h4>You exercised for {days} days : {hours} hr : {minutes} min</h4>
      <Table style={{width: '18rem'}}>
      <thead>
        <tr>
        <th>Activities</th>
        <th>Average Intensity</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>{list}</td>  
            <td>{avgIntensity}</td>
          </tr>
        </tbody>
        </Table>
    </div>
  );
};

export default WeeklyView;
