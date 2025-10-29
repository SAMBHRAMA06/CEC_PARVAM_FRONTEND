import React from "react";
import { Row, Col, Form, Button, Card, Container } from "react-bootstrap";
import "./Contact.css"; // 👈 create this file

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero text-center py-5">
        <Container>
          <h1 className="fw-bold text-white mb-3">Contact Us</h1>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
            We’d love to hear from you. Tell us about your project or query and our
            team will reach out soon.
          </p>
        </Container>
      </section>

      {/* Contact Form + Info */}
      <Container className="py-5">
        <Row className="align-items-start">
          {/* Left: Form */}
          <Col md={6} className="mb-4">
            <Card className="p-4 shadow-sm border-0 contact-card">
              <h4 className="fw-semibold mb-3">Get in Touch</h4>
              <p className="text-muted small mb-4">
                Share your details and we’ll get back to you promptly.
              </p>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Type your message here"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="rounded-pill px-4">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Right: Info + Map */}
          <Col md={6}>
            <div className="contact-info mb-4">
              <h5 className="fw-semibold mb-2">Our Office</h5>
              <p className="small text-muted mb-4">
                Atlas Consulting Pvt Ltd <br />
                12 Business Park, Bengaluru, India
              </p>

              <h6 className="fw-semibold">Key Contacts</h6>
              <p className="small mb-1">
                <strong>Sales:</strong> sales@atlas.com
              </p>
              <p className="small mb-3">
                <strong>Careers:</strong> careers@atlas.com
              </p>
            </div>

            <div className="map-container rounded overflow-hidden shadow-sm">
              <iframe
                title="map"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer CTA */}
      <section className="contact-cta text-center py-5 text-white">
        <Container>
          <h4 className="fw-bold mb-3">Let's Build Something Great Together</h4>
          <Button variant="light" className="fw-semibold px-4 rounded-pill">
            Schedule a Call
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
