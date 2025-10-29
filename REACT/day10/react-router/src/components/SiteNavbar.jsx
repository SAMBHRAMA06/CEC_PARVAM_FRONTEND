import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo"; // make sure logo.jsx or logo.svg exists
import "./SiteNavbar.css"; // custom styles

export default function SiteNavbar() {
  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className="shadow-sm py-3 custom-navbar"
    >
      <Container>
        {/* ===== Brand + Logo ===== */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <Logo width={40} height={40} />
          <span className="ms-2 fw-bold fs-5 text-uppercase brand-text">
            Atlas Consulting
          </span>
        </Navbar.Brand>

        {/* ===== Mobile Toggle ===== */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* ===== Navigation Links ===== */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            {["Home", "About", "Services", "Projects", "Careers", "Contact"].map(
              (name) => (
                <Nav.Link
                  key={name}
                  as={NavLink}
                  to={`/${name.toLowerCase() === "home" ? "" : name.toLowerCase()}`}
                  className="px-3 nav-item-custom"
                >
                  {name}
                </Nav.Link>
              )
            )}
            <Button
              as={NavLink}
              to="/contact"
              variant="primary"
              className="ms-3 px-4 fw-semibold rounded-pill"
            >
              Get in Touch
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
