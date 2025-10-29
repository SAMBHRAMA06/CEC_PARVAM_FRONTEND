import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-page d-flex align-items-center justify-content-center">
      <Container className="text-center">
        <div className="error-icon mb-4">
          <FaExclamationTriangle />
        </div>
        <h1 className="error-code">404</h1>
        <h2 className="error-title mb-3">Page Not Found</h2>
        <p className="text-muted mb-4">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button variant="primary" size="lg" onClick={() => navigate("/")}>
          Go Back Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
