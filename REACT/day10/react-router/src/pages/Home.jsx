import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaChartLine,
  FaCogs,
  FaUsers,
  FaQuoteLeft,
  FaBuilding,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="hero-section text-center text-light d-flex align-items-center">
        <Container>
          <h1 className="display-5 fw-bold mb-3">
            Empowering Businesses Through Innovation
          </h1>
          <p className="lead mb-4">
            Atlas Consulting helps organizations unlock growth with data-driven
            strategies, digital engineering, and managed solutions.
          </p>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Container>
      </section>

      {/* ===== About / Mission ===== */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=60"
                alt="Consulting team"
                className="img-fluid rounded-4 shadow-sm"
              />
            </Col>
            <Col md={6}>
              <h3 className="mb-3">Our Mission</h3>
              <p className="text-muted">
                We partner with mid-market enterprises to help them transform
                digitally, optimize operations, and achieve measurable business
                results. Our experts combine strategy, technology, and design to
                deliver meaningful impact.
              </p>
              <Button variant="outline-primary">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== Services Section ===== */}
      <section className="py-5">
        <Container>
          <h3 className="section-title text-center mb-5">What We Do</h3>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="p-4 h-100 text-center border-0 shadow-sm hover-card">
                <FaChartLine className="service-icon mb-3" />
                <h5>Strategy</h5>
                <p className="text-muted small">
                  Market research, growth planning, and operating model design
                  to align teams to outcomes.
                </p>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="p-4 h-100 text-center border-0 shadow-sm hover-card">
                <FaCogs className="service-icon mb-3" />
                <h5>Engineering</h5>
                <p className="text-muted small">
                  Full-stack product engineering, cloud migration, and platform
                  modernization with measurable impact.
                </p>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="p-4 h-100 text-center border-0 shadow-sm hover-card">
                <FaUsers className="service-icon mb-3" />
                <h5>Managed Services</h5>
                <p className="text-muted small">
                  Continuous optimization, automation, and analytics to improve
                  ROI and reduce TCO.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== Trusted Clients ===== */}
      <section className="py-5 bg-light">
        <Container className="text-center">
          <h3 className="section-title mb-4">Trusted by Industry Leaders</h3>
          <Row className="align-items-center justify-content-center g-4">
            {["ClientA", "ClientB", "ClientC", "ClientD"].map((client, i) => (
              <Col key={i} xs={6} md={3}>
                <img
                  alt={client}
                  src={`https://dummyimage.com/200x60/${["0d6efd", "343a40", "6c757d", "20c997"][i]}/fff&text=${client}`}
                  style={{ opacity: 0.9 }}
                  className="img-fluid"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-5">
        <Container>
          <h3 className="section-title text-center mb-5">
            What Our Clients Say
          </h3>
          <Row>
            {[
              {
                name: "Emily Carter",
                role: "CTO, FinEdge Group",
                feedback:
                  "Atlas transformed our infrastructure with their cloud engineering expertise. Truly professional!",
              },
              {
                name: "Mark Johnson",
                role: "Founder, NovaTech",
                feedback:
                  "The strategic guidance we received from Atlas helped us scale faster than ever.",
              },
            ].map((t, i) => (
              <Col key={i} md={6} className="mb-4">
                <Card className="p-4 border-0 shadow-sm testimonial-card h-100">
                  <FaQuoteLeft className="text-primary mb-3 fs-3" />
                  <p className="text-muted">{t.feedback}</p>
                  <h6 className="fw-semibold mt-3 mb-0">{t.name}</h6>
                  <small className="text-secondary">{t.role}</small>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== CTA Banner ===== */}
      <section className="cta-banner text-light text-center py-5">
        <Container>
          <FaBuilding className="mb-3 fs-1" />
          <h3 className="fw-bold mb-3">Ready to Accelerate Your Business?</h3>
          <p className="lead mb-4">
            Let’s collaborate to create scalable, efficient, and future-ready
            solutions.
          </p>
          <Button variant="light" size="lg">
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;
