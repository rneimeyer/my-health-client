import { Link } from "react-router-dom";
import { Navbar,Nav,Container } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand className="brand" href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Link className="navbar" to="/">Home</Link>
          <Link className="navbar" to="/daily-tracker">Daily Tracker</Link>
          <Link className="navbar" to="/my-health">My Health</Link>
          <Link className="navbar" to="/about-team">Meet the Team</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
