//weeklyview

import { ProgressBar, Table } from "react-bootstrap";

const WeeklyView = ({ urlBase, user }) => {
  const activities = user.activity;
  let days = activities.length;
  let hours = 0;
  let minutes = 0;
  let totalIntensity = 0;

  console.log(activities.length);
  const list = activities.map((activity) => {
    minutes += activity.length;
    if (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    }
    totalIntensity += activity.intensity;
  });

  let avgIntensity = Math.floor(totalIntensity / days);

  return (
    <div className="weekly-view">
      <h3 className="weekly-h3">Weekly Activity</h3>
      <h4>
        You exercised for {days} days : {hours} hr : {minutes} min
      </h4>
      <h5>Average Intensity</h5>
      <ProgressBar
        now={avgIntensity * 10}
        variant="info"
        label={`${avgIntensity}/10`}
        style={{ width: "18rem" }}
        className="mx-auto"
      />
    </div>
  );
};

export default WeeklyView;
