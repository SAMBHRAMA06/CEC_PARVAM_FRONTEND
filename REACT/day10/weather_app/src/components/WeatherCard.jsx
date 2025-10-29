import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function WeatherCard({ data }) {
  const {
    name,
    sys: { country },
    main: { temp, temp_min, temp_max, humidity },
    weather,
    wind,
  } = data;

  const icon = weather[0].icon;
  const description = weather[0].description;

  return (
    <Card className="shadow-sm border-0 weather-card">
      <Card.Body className="text-center">
        <h3 className="fw-bold text-primary">
          {name}, {country}
        </h3>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
        <h1 className="display-5 fw-bold">{Math.round(temp)}°C</h1>
        <p className="text-capitalize text-muted">{description}</p>
        <Row className="mt-4">
          <Col>
            <h6>Min</h6>
            <p>{Math.round(temp_min)}°C</p>
          </Col>
          <Col>
            <h6>Max</h6>
            <p>{Math.round(temp_max)}°C</p>
          </Col>
          <Col>
            <h6>Humidity</h6>
            <p>{humidity}%</p>
          </Col>
          <Col>
            <h6>Wind</h6>
            <p>{wind.speed} m/s</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
