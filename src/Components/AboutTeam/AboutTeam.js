//aboutTeam js
import "./AboutTeam.css";
import Lauren from "./../../assets/lauren.jpeg";
import Anju from "./../../assets/anju.jpeg";
import Rebecca from "./../../assets/rebecca.jpeg";
import Kae from "./../../assets/kae.jpeg";

const AboutTeam = () => {
  return (
    <div className="about">
      <h2 className="team-h2">Get to know team Lark! 🐣</h2>
      <div className="about-section">
        <div className="member-container">
          <img src={Lauren} alt="Lauren's headshot" className="headshot" />
          <h2 className="member-name">Lauren</h2>
          <div className="about-text">
            <p className="bio-stats"><span className="bold">Age:</span> 26 </p>
            <p className="bio-stats">
            <span className="bold">Favorite Exercises/Sports:</span> Surfing, Dancing, Yoga{" "}
            </p>
            <p className="bio-stats"><span className="bold">Training For:</span> Fun</p>
            <p className="bio-stats">
            <span className="bold">Background:</span> I am a designer turned web developer who brings
              enthusiasm, creativity and an exceptional work ethic to every
              team. I am trained as a full stack developer, and provide great
              value with my interpersonal skills, big-picture thinking,
              efficient solutions and positive attitude. I work well under
              pressure and love to think outside of the box to solve challenging
              problems.{" "}
            </p>
            <p className="bio-stats">
            <span className="bold">Contribution:</span> On this team project Lauren helped with the
              planning, backend models and routes, and deployment of the
              database. For the react app Lauren focused on the javascript
              functionality of the daily tracker form and updating the database
              models. She also created filtering functions for the My Health
              weekly and daily views.
            </p>
            <p>
              <a href="https://www.linkedin.com/in/laurenleighcolvin/">
                <img
                  className="link-icons linkedin"
                  alt="linkedin"
                  src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
                ></img>
              </a>
              <a href="https://github.com/LaurenColvin">
                <img
                  className="link-icons github"
                  alt="github"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                ></img>
              </a>
            </p>
          </div>
        </div>

        <div className="member-container">
          <img src={Anju} alt="Anju's headshot" className="headshot" />
          <p className="member-name">Anju</p>
          <div className="about-text">
            <p className="bio-stats"><span className="bold">Age:</span> 27 </p>
            <p className="bio-stats">
              <span className="bold">Favorite Exercises/Sports:</span> Hiking, Swimming{" "}
            </p>
            <p className="bio-stats"><span className="bold">Training For:</span> For Health </p>
            <p className="bio-stats">
              <span className="bold">Background:</span> Software developer with hands-on experience in
              designing, developing, and implementing applications and solutions
              using a range of technologies and programming languages.{" "}
            </p>
            <p className="bio-stats">
              <span className="bold">Contribution:</span> On this team project Anju helped with the planning,
              backend models and routes, and setup of the database. For the
              react app Anju focused on the CSS styling and incorporating
              bootstrap into the forms and nav bar. She also worked on the
              responsive design, adding grid layout and ensuring everything fits
              nicely on each screen.
            </p>
            <p className="bio-stats">
              <a href="https://www.linkedin.com/in/anju-dhungana/">
                <img
                  className="link-icons linkedin"
                  alt="linkedin"
                  src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
                ></img>
              </a>
              <a href="https://github.com/anjuu123">
                <img
                  className="link-icons github"
                  alt="github"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                ></img>
              </a>
            </p>
          </div>
        </div>
        <div className="member-container">
          <img src={Rebecca} alt="Rebecca's headshot" className="headshot" />
          <p className="member-name Rebecca">Rebecca</p>
          <div className="about-text">
            <p className="bio-stats"><span className="bold">Age:</span> 27 </p>
            <p className="bio-stats">
            <span className="bold">Favorite Exercises/Sports:</span> Hiking, Biking, Core
            </p>
            <p className="bio-stats"><span className="bold">Training For:</span> My health!</p>
            <p className="bio-stats">
            <span className="bold">Background:</span> As a merchandiser turned software engineer, I am
              highly customer-focused in everything I do. With my keen eye for
              detail, I strive to achieve the most efficient solution for any
              problem. I am a compassionate and collaborative team-member with a
              strong work ethic and positive attitude that I bring into daily
              interactions.{" "}
            </p>
            <p className="bio-stats">
            <span className="bold">Contribution:</span> On this team project Rebecca helped with the
              planning, backend models and routes, and deployment of the
              database. For the react app Rebecca focused on the javascript
              functionality of the create new user form and updating the
              database models on the my health page. She also created onClick
              functions for the My Health delete and update buttons to ensure
              full functionality.
            </p>
            <p>
              <a href="https://www.linkedin.com/in/rebecca-neimeyer/">
                <img
                  className="link-icons linkedin"
                  alt="linkedin"
                  src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
                ></img>
              </a>
              <a href="https://github.com/rneimeyer">
                <img
                  className="link-icons github"
                  alt="github"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                ></img>
              </a>
            </p>
          </div>
        </div>
        <div className="member-container">
          <img src={Kae} alt="Kae's headshot" className="headshot" />
          <p className="member-name">Kae</p>
          <div className="about-text">
            <p className="bio-stats"><span className="bold">Age:</span> 28</p>
            <p className="bio-stats">
            <span className="bold">Favorite Exercises/Sports:</span> Volleyball, Tennis{" "}
            </p>
            <p className="bio-stats">
            <span className="bold">Training For:</span> Volleyball Tournaments, Spartan Race
            </p>
            <p className="bio-stats">
            <span className="bold">Background:</span> As an athlete, I've never found an application that was
              versatile and friendly enough to track all of my workouts, habits,
              and mood. As a software engineer, I am proud of the application
              and how much philosophy it is rooted in.
            </p>
            <p className="bio-stats">
            <span className="bold">Contribution:</span> On this team project Kae helped with the planning,
              backend models and routes, and setup of the database. For the
              react app Kae focused on the routes, links and creating a
              functional nav bar. He also worked on the CSS and responsive
              design, adding grid layout and ensuring everything fits nicely on
              each screen.
            </p>
            <p>
              <a href="https://www.linkedin.com/in/kae-saetern/">
                <img
                  className="link-icons linkedin"
                  alt="linkedin"
                  src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
                ></img>
              </a>
              <a href="https://github.com/kaesae">
                <img
                  className="link-icons github"
                  alt="github"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                ></img>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
