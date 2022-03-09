const DailyView = ({ urlBase, user, handleSubmit }) => {
    
  const activities = user.activity;
  const handleDelete = (id) => {
      fetch(`${urlBase}/activity/${id}`, {
          method: 'DELETE'
      })
      .then((response) => response.json())
  }

const refreshPage = (event) => {
    handleDelete(event.target.id)
    handleSubmit(event)
}

  const list = activities.map((activity) => {
    return (
      <div key={activity._id}>
        <p>Date: {activity.date}</p>
        <p>Exercise: {activity.exercise}</p>
        <p>Length: {activity.length} minutes</p>
        <p>Intensity: {activity.intensity}</p>
        <button onClick={refreshPage} id={activity._id}>Delete</button>
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
