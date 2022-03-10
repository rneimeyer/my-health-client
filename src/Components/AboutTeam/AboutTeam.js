//aboutTeam js
import "./AboutTeam.css";
import Lauren from "./../../assets/lauren.jpeg";
import Anju from "./../../assets/anju.jpeg";
import Rebecca from "./../../assets/rebecca.jpeg";
import Kae from "./../../assets/kae.jpeg";

const AboutTeam = () => {
  return (
    <div className="about">
      <h1>Get to know team Lark! 🐣</h1>
      <div className="about-section">
        <img src={Lauren} alt="Lauren's image" className="headshot" />
        <p className="member-name">Lauren</p>
        <div className="about-text">
          <p>Age: 26</p>
          <p>Favorite Activities: Surfing, Dancing, Yoga </p>
          <p>
            Background: I am a designer turned web developer who brings
            enthusiasm, creativity and an exceptional work ethic to every team.
            I am trained as a full stack developer, and provide great value with
            my interpersonal skills, big-picture thinking, efficient solutions
            and positive attitude. I work well under pressure and love to think
            outside of the box to solve challenging problems.
          </p>
          <p>https://www.linkedin.com/in/laurenleighcolvin/</p>
          <p>https://github.com/LaurenColvin</p>
        </div>
        <img src={Anju} alt="Anju's image" className="headshot" />
        <p className="member-name">Anju</p>
        <div className="about-text">
          <p>Age: 27 </p>
          <p>Favorite Exercises/Sports: Hiking, Swimming </p>
          <p>Training For: For Health </p>
          <p>
            Background: Software developer with hands-on experience in
            designing, developing, and implementing applications and solutions
            using a range of technologies and programming languages.
          </p>
          <p>https://www.linkedin.com/in/anju-dhungana/</p>
          <p>https://github.com/anjuu123</p>
        </div>
        <img src={Rebecca} alt="Rebecca's image" className="headshot" />
        <p className="member-name">Rebecca</p>
        <div className="about-text">
          <p>Age: 27</p>
          <p>Favorite Activities: Hiking, Biking, Core</p>
          <p>Training For: My Health!</p>
          <p>
            Background: As a merchandiser turned software engineer, I am highly
            customer-focused in everything I do. With my keen eye for detail, I
            strive to achieve the most efficient solution for any problem. I am
            a compassionate and collaborative team-member with a strong work
            ethic and positive attitude that I bring into daily interactions.
          </p>
          <p>https://www.linkedin.com/in/rebecca-neimeyer/</p>
          <p>https://github.com/rneimeyer</p>
        </div>
        <img src={Kae} alt="Kae's image" className="headshot" />
        <p className="member-name">Kae</p>
        <div className="about-text">
          <p>Age: 28</p>
          <p>Favorite Activities: Volleyball, Tennis</p>
          <p>Training For: Volleyball Tournaments, Spartan Race</p>
          <p>
            Background: Favorite Exercises/Sports: Volleyball, Tennis Training
            For: Volleyball Tournaments, Spartan Race Background/Relation to
            App/Mission: As an athlete, I’ve never found an application that was
            versatile and friendly enough to track all of my workouts, habits,
            and mood. As a software engineer, I am proud of the application and
            how much philosophy it is rooted in.
          </p>
          <p>https://www.linkedin.com/in/kae-saetern/</p>
          <p>https://github.com/kaesae</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
