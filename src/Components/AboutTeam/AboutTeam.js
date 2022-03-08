//aboutTeam js
import "./AboutTeam.css"
import Lauren from "./../../assets/lauren.jpeg"
import Anju from "./../../assets/anju.jpeg"
import Rebecca from "./../../assets/rebecca.jpeg"
import Kae from "./../../assets/kae.jpeg"

const AboutTeam = () => {
  return (
  <div className="about">
      <h1>Get to know team Lark! 🐣</h1>
      <div className="about-section">
      <img src={Lauren} alt="Lauren's image" className="headshot"/>
      <p className="member-name">Lauren</p>
      <div className="about-text">
      <p>Name: </p>
      <p>Age: </p>
      <p>Favorite Exercises/Sports: </p>
      <p>Training For: </p>
      <p>Background: </p>
      </div>
    <img src={Anju} alt="Anju's image" className="headshot"/>
    <p className="member-name">Anju</p>
    <div className="about-text">
      <p>Name: </p>
      <p>Age: </p>
      <p>Favorite Exercises/Sports: </p>
      <p>Training For: </p>
      <p>Background: </p>
      </div>
    <img src={Rebecca} alt="Rebecca's image" className="headshot"/>
    <p className="member-name">Rebecca</p>
    <div className="about-text">
      <p>Name: </p>
      <p>Age: </p>
      <p>Favorite Exercises/Sports: </p>
      <p>Training For: </p>
      <p>Background: </p>
      </div>
    <img src={Kae} alt="Kae's image" className="headshot"/>
    <p className="member-name">Kae</p>
    <div className="about-text">
      <p>Name: </p>
      <p>Age: </p>
      <p>Favorite Exercises/Sports: </p>
      <p>Training For: </p>
      <p>Background: </p>
      </div>
    </div>
  </div>
  )
};

export default AboutTeam;
