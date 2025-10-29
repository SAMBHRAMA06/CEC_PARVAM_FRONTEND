import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* === Hero Section === */}
      <section className="about-hero text-center text-light py-5">
        <Container>
          <h2 className="hero-title fw-bold mb-3">About Atlas Consulting</h2>
          <p className="hero-subtitle">
            We are a strategy and engineering consulting firm helping
            organizations accelerate innovation and achieve measurable business
            results through technology.
          </p>
        </Container>
      </section>

      {/* === Section 1: Company Overview === */}
      <Container className="py-5">
        <section className="mb-5">
          <Row className="align-items-center">
            <Col md={6}>
              <p className="lead text-muted">
                <strong>Atlas Consulting</strong> is a boutique advisory firm
                focused on strategy, product, and cloud engineering. Since our
                founding in <strong>2015</strong>, we’ve partnered with over{" "}
                <strong>80 global clients</strong> across fintech, healthcare,
                and retail industries.
              </p>

              <ul className="about-list">
                <li>
                  🚀 Leadership from enterprise software and global consulting
                </li>
                <li>🎯 Outcome-driven delivery by senior engineers and PMs</li>
                <li>
                  ⚙️ Scalable, cloud-native architectures for business impact
                </li>
              </ul>
            </Col>

            <Col md={6}>
              <Card className="p-4 shadow-sm border-0 bg-light mission-card">
                <h5 className="fw-bold text-primary mb-2">Our Mission</h5>
                <p className="text-secondary mb-0">
                  To help organizations bridge the gap between{" "}
                  <strong>strategy and execution</strong>, ensuring digital
                  investments drive measurable business outcomes.
                </p>
              </Card>
            </Col>
          </Row>
        </section>

        {/* === Section 2: Leadership === */}
        <section className="mt-5">
          <h3 className="section-title text-primary fw-bold mb-4 text-center">
            Leadership Team
          </h3>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="p-4 text-center shadow-sm border-0 team-card">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="ceo"
                  className="rounded-circle mx-auto mb-3 border"
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    border: "3px solid #0d6efd",
                  }}
                />
                <h6 className="fw-semibold mb-0">Arun Mehta</h6>
                <p className="small text-muted mb-2">Founder & CEO</p>
                <p className="small text-secondary">
                  18+ years in enterprise strategy and digital transformation.
                </p>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="p-4 text-center shadow-sm border-0 team-card">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="cto"
                  className="rounded-circle mx-auto mb-3 border"
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    border: "3px solid #0d6efd",
                  }}
                />
                <h6 className="fw-semibold mb-0">Priya Kapoor</h6>
                <p className="small text-muted mb-2">
                  Chief Technology Officer
                </p>
                <p className="small text-secondary">
                  Cloud-native engineering expert with a passion for innovation.
                </p>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="p-4 text-center shadow-sm border-0 team-card">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="delivery head"
                  className="rounded-circle mx-auto mb-3 border"
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    border: "3px solid #0d6efd",
                  }}
                />
                <h6 className="fw-semibold mb-0">Ramesh Iyer</h6>
                <p className="small text-muted mb-2">Head of Delivery</p>
                <p className="small text-secondary">
                  Leads agile delivery excellence with focus on client success.
                </p>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default About;
