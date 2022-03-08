import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="links">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/daily-tracker">Daily Tracker</Link>
        </p>
        <p>
          <Link to="/my-health">My Health</Link>
        </p>
        <p>
          <Link to="/about-team">Meet the Team</Link>
        </p>
      </div>
      <img className="menu" src="https://cdn0.iconfinder.com/data/icons/essentials-line/100/Menu-1024.png"></img>
    </header>
  );
};

export default Header;
