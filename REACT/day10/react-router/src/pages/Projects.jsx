import React from "react";
import { Row, Col, Card, Badge, Container } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "NeoBank Platform",
      desc: "A next-gen digital banking platform built with microservices, enabling real-time financial operations and a seamless mobile experience.",
      tech: "Java, Spring Boot, React",
      status: "Live",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "TeleHealth Portal",
      desc: "Secure telemedicine solution offering virtual consultations, patient management, and AI-driven analytics for healthcare providers.",
      tech: "Node.js, React, WebRTC",
      status: "Pilot",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Retail Analytics Suite",
      desc: "Real-time data visualization and predictive analytics platform for multi-outlet retail chains to boost sales efficiency.",
      tech: "Python, Apache Spark, React",
      status: "Delivered",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="projects-page">
      {/* === Hero Section === */}
      <section className="projects-hero text-center py-5">
        <Container>
          <h1 className="fw-bold text-white mb-3">Our Projects</h1>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
            We help enterprises transform through modern digital solutions —
            delivering innovation, scalability, and measurable impact.
          </p>
        </Container>
      </section>

      {/* === Project Cards Section === */}
      <Container className="py-5">
        <section className="text-center mb-5">
          <h2 className="section-title text-primary fw-bold mb-3">
            Featured Projects
          </h2>
          <p className="text-muted">
            Explore some of our most impactful engagements where strategy meets
            technology — delivering measurable business results.
          </p>
        </section>

        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="project-card h-100 shadow-sm border-0">
                <div className="image-wrapper position-relative">
                  <Card.Img
                    variant="top"
                    src={project.img}
                    alt={project.title}
                    className="project-img"
                  />
                  <Badge
                    bg="light"
                    text="dark"
                    className={`status-badge status-${project.status.toLowerCase()}`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <Card.Body>
                  <h5 className="fw-semibold text-primary">{project.title}</h5>
                  <p className="small text-muted mb-2">{project.desc}</p>
                  <p className="small">
                    <strong>Tech Stack:</strong> {project.tech}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
