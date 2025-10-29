import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      console.log(apiKey);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      console.log(err);
      setError("City not found or API error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4 text-primary fw-bold">
            🌤 Weather Dashboard
          </h2>
          <SearchBar onSearch={getWeather} />
          {loading && (
            <div className="text-center my-4">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          {error && <Alert variant="danger">{error}</Alert>}
          {weather && <WeatherCard data={weather} />}
        </Col>
      </Row>
    </Container>
  );
}
