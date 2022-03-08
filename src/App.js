import "./App.css";
import "./App.css";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import AboutTeam from './Components/AboutTeam/AboutTeam'
import MyHealth from './Components/MyHealth/MyHealth'
// import DailyTracker from './Components/DailyTracker/DailyTracker'

function App() {

  const urlBase = 'http://localhost:3000'
  const [people, setPeople] = useState([])

  useEffect(() =>{
    fetch(urlBase + '/person')
    .then((response) => response.json())
    .then((data) => setPeople(data.person))
   }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home urlBase={urlBase} people={people} setPeople={setPeople}/>} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about-team" element={<AboutTeam />} />
          {/* <Route path="/daily-tracker" element={<DailyTracker urlBase={urlBase} people={people} setPeople={setPeople}/>} /> */}
          <Route path="/my-health" element={<MyHealth urlBase={urlBase} people={people} setPeople={setPeople}/>} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;