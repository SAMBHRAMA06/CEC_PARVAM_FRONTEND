import React from "react";
import { Row, Col, Card, ListGroup, Container } from "react-bootstrap";
import { FaCloud, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const serviceList = [
    {
      title: "Cloud & Infrastructure",
      icon: <FaCloud />,
      bullets: [
        "Cloud migration and modernization",
        "Kubernetes, DevOps automation",
        "Performance and cost optimization",
      ],
    },
    {
      title: "Product Engineering",
      icon: <FaMobileAlt />,
      bullets: [
        "End-to-end product development",
        "APIs & third-party integrations",
        "Platform re-engineering for scale",
      ],
    },
    {
      title: "Risk & Security",
      icon: <FaShieldAlt />,
      bullets: [
        "Comprehensive security assessments",
        "Identity and access management",
        "Regulatory compliance and audits",
      ],
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero text-center text-light py-5">
        <Container>
          <h2 className="hero-title fw-bold mb-3">Our Core Services</h2>
          <p className="hero-subtitle">
            We partner with organizations to accelerate digital transformation
            through engineering, cloud, and secure architecture practices.
          </p>
        </Container>
      </section>

      {/* Service Cards Section */}
      <Container className="py-5">
        <Row>
          {serviceList.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="service-card h-100 p-4 shadow-sm border-0 text-center">
                <div className="icon-wrapper mx-auto mb-3">{service.icon}</div>
                <h5 className="fw-semibold mb-3">{service.title}</h5>
                <ListGroup variant="flush" className="text-start">
                  {service.bullets.map((point, i) => (
                    <ListGroup.Item
                      key={i}
                      className="border-0 ps-0 small text-secondary bg-transparent"
                    >
                      • {point}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
