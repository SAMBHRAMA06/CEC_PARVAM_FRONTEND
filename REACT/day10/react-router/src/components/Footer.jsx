import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-5 pt-5 pb-3 text-light">
      <Container>
        <Row className="gy-4">
          {/* ===== Brand Info ===== */}
          <Col md={4} sm={12}>
            <h5 className="fw-bold mb-3">Atlas Consulting</h5>
            <p className="small text-white-50">
              Transforming businesses through innovation, digital transformation,
              and strategic technology consulting.
            </p>
            <div className="social-icons mt-3">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </Col>

          {/* ===== Quick Links ===== */}
          <Col md={4} sm={6}>
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </Col>

          {/* ===== Subscribe Section ===== */}
          <Col md={4} sm={6}>
            <h6 className="fw-semibold mb-3">Subscribe</h6>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
            <p className="small text-white-50 mt-3">
              Get the latest updates and insights from Atlas Consulting.
            </p>
          </Col>
        </Row>

        {/* ===== Bottom Line ===== */}
        <hr className="mt-5 mb-3 text-white-50" />
        <Row>
          <Col className="text-center small text-white-50">
            © {new Date().getFullYear()} Atlas Consulting. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
