import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "./Careers.css"; // 👈 Add this new CSS file

const Careers = () => {
  const openings = [
    { role: "Senior Full-Stack Engineer", loc: "Bengaluru", type: "Full-time" },
    { role: "Product Manager", loc: "Remote", type: "Contract" },
    { role: "UI/UX Designer", loc: "Hyderabad", type: "Full-time" },
    { role: "DevOps Engineer", loc: "Remote", type: "Full-time" },
  ];

  return (
    <div className="careers-page">
      {/* Header Section */}
      <section className="careers-hero text-center py-5">
        <Container>
          <h1 className="fw-bold mb-3 text-white">Join Our Team</h1>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
            Be part of a fast-growing team that creates meaningful digital products.
          </p>
        </Container>
      </section>

      {/* Open Roles Section */}
      <Container className="py-5">
        <h2 className="section-title text-center mb-4">Current Openings</h2>
        <p className="text-center text-muted mb-5">
          We grow teams that build great software. Explore our open roles below.
        </p>
        <Row>
          {openings.map((o, i) => (
            <Col md={6} lg={4} key={i} className="mb-4">
              <Card className="career-card shadow-sm border-0 h-100">
                <Card.Body>
                  <h5 className="fw-semibold">{o.role}</h5>
                  <p className="small text-muted mb-4">
                    📍 {o.loc} • {o.type}
                  </p>
                  <Button variant="outline-primary" className="apply-btn">
                    Apply Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {openings.length === 0 && (
          <p className="text-center text-muted mt-5">
            No openings currently. Please check back soon!
          </p>
        )}
      </Container>

      {/* Join Us Section */}
      <section className="careers-footer text-center py-5 text-white">
        <Container>
          <h3 className="fw-bold mb-3">Grow With Us</h3>
          <p className="mb-4">
            We’re building a culture of innovation, ownership, and teamwork.
          </p>
          <Button variant="light" className="fw-semibold px-4">
            Send Your Resume
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Careers;
