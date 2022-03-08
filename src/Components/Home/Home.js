//home

import { useState } from 'react';

const Home = ({urlBase}) => {
    const [people, setPeople] = useState([])
    const [person, setPerson] = useState({ firstName:"", lastName:"", email:"", age:Number, weight:Number, height:Number, mood:""})
    const handleChange = (event) => {
        event.persist();
        setPerson((prevPerson) => {
            const editedPerson = {
                ...prevPerson,
                [event.target.name]: event.target.value,
            };
            return editedPerson;
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${urlBase}person`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(person),
        })
        .then(() => fetch(`${urlBase}person`))
        .then((response) => response.json())
        .then((data) => setPeople(data.person))
        .then(() => setPerson({ firstName:"", lastName:"", email:"", age:Number, weight:Number, height:Number, mood:""}))
    }
    return (
        <div className="home">
            <h2>Add a new person to get started!</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={person.firstName} name="firstName" placeholder="First Name"></input>
                <input onChange={handleChange} value={person.lastName} name="lastName" placeholder="Last Name"></input>
                <input onChange={handleChange} value={person.email} name="email" placeholder="Email" type="email"></input>
                <input onChange={handleChange} value={person.age} name="age" placeholder="Age"></input>
                <input onChange={handleChange} value={person.weight} name="weight" placeholder="Weight"></input>
                <input onChange={handleChange} value={person.height} name="height" placeholder="Height"></input>
                <input onChange={handleChange} value={person.mood} name="mood" placeholder="Mood"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Home;