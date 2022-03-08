import {useState, useEffect} from "react";

const DailyTracker = ({urlBase, people, setPeople}) => {

    const [email, setEmail] = useState("")
    const [personId, setPersonId] = useState("")
    const [date, setDate] = useState("")
    const [exercise, setExercise] = useState("")
    const [length, setLength] = useState("")
    const [intensity, setIntensity] = useState("")
    const [activityModel, setActivityModel] = useState({})


    const emailHandleChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
        let person = people.filter((n) => n.email === event.target.value)
        console.log(person)
      };

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

      const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            "date": date,
            "exercise": exercise,
            "length": length,
            "intensity": intensity,
        }
        setActivityModel(data)
        console.log(data)
      }

    return (
        <div>
            <h1> Welcome to the Daily Tracker</h1>
            <h2>Please input your email and the date to track your activity today!</h2>
            <form onSubmit={handleSubmit} >
                <div className="email">
                    <input onChange={emailHandleChange} name="email" placeholder="Email"></input>
                </div>
                <br />
                <div className="date">
                    <input onChange={dateHandleChange} name="date" placeholder="Date"></input>
                </div>
                <br />
                <div onChange={activityHandleChange} className="activity">
                    <label> What activity did you do? </label>
                    <select className="dropdown" id="activity-type">
                        <option className='option' value="walk">Walk</option>
                        <option className='option' value="run">Run</option>
                        <option className='option' value="bike">Bike</option>
                        <option className='option' value="swim">Swim</option>
                        <option className='option' value="hike">Hike</option>
                        <option className='option' value="yoga">Yoga</option>
                        <option className='option' value="pilates">Pilates</option>
                        <option className='option' value="hiit">HIIT</option>
                        <option className='option' value="sports">Sports</option>
                        <option className='option' value="dance">Dance</option>
                        <option className='option' value="core">Core</option>
                        <option className='option' value="arms">Arms</option>
                        <option className='option' value="legs">Legs</option>
                        <option className='option' value="back">Back</option>
                        <option className='option' value="full-body-strength">Full Body Strength</option>
                    </select>
                </div>
                <div onChange={lengthHandleChange} className="length">
                    <input name="length" placeholder="Length in minutes"></input>
                </div>
                <br />
                <div onChange={intensityHandleChange} className="intensity">
                    <label> How intense was your activity? </label>
                    <select className="dropdown" id="activity-type">
                        <option className='option' value="1">1</option>
                        <option className='option' value="2">2</option>
                        <option className='option' value="3">3</option>
                        <option className='option' value="4">4</option>
                        <option className='option' value="5">5</option>
                        <option className='option' value="6">6</option>
                        <option className='option' value="7">7</option>
                        <option className='option' value="8">8</option>
                        <option className='option' value="9">9</option>
                        <option className='option' value="10">10</option>
                    </select>
                </div>
                <br />
                <input className="submit-button" type="submit"></input>
            </form>
        </div>
    )
}

export default DailyTracker;