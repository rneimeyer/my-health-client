import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
// import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'
// import Home from './Components/Home/Home'
// import AboutTeam from './Components/AboutTeam/AboutTeam'
// import MyHealth from './Components/MyHealth/MyHealth'
// import DailyTracker from './Components/DailyTracker/DailyTracker'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about-team" element={<AboutTeam />} />
          <Route path="/daily-tracker" element={<DailyTracker />} />
          <Route path="/my-health" element={<MyHealth />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
