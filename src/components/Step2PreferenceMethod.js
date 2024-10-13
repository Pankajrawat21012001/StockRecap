import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./Step2PreferenceMethod.css";

const Step2PreferenceMethod = () => {
  const [preferences, setPreferences] = useState(() => {
    const storedPreferences = localStorage.getItem("userPreferences");
    return storedPreferences
      ? JSON.parse(storedPreferences)
      : {
          infoTypes: [],
          shareMethods: [],
          notificationTime: "7:00",
          notificationDays: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
  }, [preferences]);

  const handleInfoTypesChange = (type) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      infoTypes: prevPreferences.infoTypes.includes(type)
        ? prevPreferences.infoTypes.filter((t) => t !== type)
        : [...prevPreferences.infoTypes, type],
    }));
  };

  const handleShareMethodsChange = (method) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      shareMethods: prevPreferences.shareMethods.includes(method)
        ? prevPreferences.shareMethods.filter((m) => m !== method)
        : [...prevPreferences.shareMethods, method],
    }));
  };

  const handleNotificationTimeChange = (time) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      notificationTime: time,
    }));
  };

  const handleNotificationDaysChange = (method) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      notificationDays: method,
    }));
  };

  return (
    <div className="step-content">
      <h3>Information & Sharing Preferences</h3>
      <p>Select the types of information you want to receive and how you want to receive them.</p>

      <Form.Group controlId="infoTypes">
        <Form.Label>Select Types of Information</Form.Label>
        <Row>
          {["Announcements", "News", "Stock Price"].map((type) => (
            <Col xs={12} md={6} key={type} className="mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <span>{type}</span>
                <Form.Check
                  type="switch"
                  id={`switch-${type}`}
                  label=""
                  value={type}
                  checked={preferences.infoTypes.includes(type)}
                  onChange={() => handleInfoTypesChange(type)}
                  className="ml-auto"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Form.Group controlId="shareMethods" className="mt-3">
        <Form.Label>Select Sharing Methods</Form.Label>
        <Row>
          {["Email", "Message", "WhatsApp"].map((method) => (
            <Col xs={12} md={6} key={method} className="mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <span>{method}</span>
                <Form.Check
                  type="switch"
                  id={`switch-${method}`}
                  label=""
                  value={method}
                  checked={preferences.shareMethods.includes(method)}
                  onChange={() => handleShareMethodsChange(method)}
                  className="ml-auto"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Form.Group controlId="notificationTime" className="mb-3">
        <div className="d-flex align-items-center bw-input">
          <Form.Label className="w-50 mb-0">Set Notification Time</Form.Label>
          <Form.Control
            type="time"
            value={preferences.notificationTime}
            step="900"
            onChange={(e) => handleNotificationTimeChange(e.target.value)}
            className="form-control w-50 mt-3"
          />
        </div>
      </Form.Group>

      <Form.Group controlId="notificationDays" className="mt-3">
        <Form.Label>Select Notification Days</Form.Label>
        <Row>
          {["Everyday", "Working day"].map((method) => (
            <Col xs={12} md={6} key={method} className="mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <span>{method}</span>
                <Form.Check
                  type="radio"
                  id={`radio-${method}`}
                  name="notificationDays"
                  label=""
                  value={method}
                  checked={preferences.notificationDays === method}
                  onChange={() => handleNotificationDaysChange(method)}
                  className="ml-auto"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Form.Group>
    </div>
  );
};

export default Step2PreferenceMethod;