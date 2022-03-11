import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="white" expand="md" fixed="top">
        <Container>
          <Navbar.Brand className="brand" href="/">
            MyHealthApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="navbar-links" to="/">
                Home
              </Link>
              <Link className="navbar-links" to="/daily-tracker">
                Daily Tracker
              </Link>
              <Link className="navbar-links" to="/my-health">
                My Health
              </Link>
              <Link className="navbar-links" to="/about-team">
                Meet the Team
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
