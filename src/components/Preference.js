import React, { useState } from "react";
import "./Preference.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import Step1SelectStock from "./Step1SelectStock";
import Step2PreferenceMethod from "./Step2PreferenceMethod";
import Step3Pricing from "./Step3Pricing";
import Step4Submit from "./Step4Submit";

const Preference = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [infoTypes, setInfoTypes] = useState([]);
  const [shareMethods, setShareMethods] = useState([]);
  const [notificationDays, setNotificationDays] = useState("");
  const [notificationTime, setNotificationTime] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  // Function to handle form submission and sending email
  const handleSubmitClick = async () => {
    // Retrieve the data directly from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const stocks = JSON.parse(localStorage.getItem("selectedStocks"));
    const userPreferences = JSON.parse(localStorage.getItem("userPreferences"));

    const info = userPreferences?.infoTypes || [];
    const share = userPreferences?.shareMethods || [];
    const days = userPreferences?.notificationDays || "";
    const time = userPreferences?.notificationTime || "7:00";

    // Update state after fetching all data
    setUserData(user);
    setSelectedStocks(stocks);
    setInfoTypes(info);
    setShareMethods(share);
    setNotificationDays(days);
    setNotificationTime(time);

    // Perform validation checks with the local variables
    if (
      !user ||
      stocks.length === 0 ||
      info.length === 0 ||
      share.length === 0 ||
      !days
    ) {
      setSubmissionMessage("Please fill all information.");
      return;
    }

    setSubmissionMessage(""); // Clear message when all checks pass

    const formData = new FormData();

    // Append all the data to the formData
    formData.append(
      "access_key",
      process.env.REACT_APP_WEB3FORMS_EMAIL_ACCESS_KEY
    );
    formData.append("userData", JSON.stringify(user));
    formData.append("selectedStocks", stocks.join(", "));
    formData.append("infoTypes", info.join(", "));
    formData.append("shareMethods", share.join(", "));
    formData.append("notificationDays", days);
    formData.append("notificationTime", time);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true); // Set form as submitted
        console.log("Form submitted successfully:", data);
      } else {
        setSubmissionMessage("Error submitting form: " + data.message);
        console.error("Error submitting form:", data.message);
      }
    } catch (error) {
      setSubmissionMessage("An error occurred during form submission.");
      console.error("An error occurred during form submission:", error);
    }
  };

  const steps = [
    {
      step: 1,
    },
    {
      step: 2,
    },
    {
      step: 3,
    },
    {
      step: 4,
    },
  ];

  const totalSteps = steps.length;

  return (
    <Container className="preference-container mt-4">
      {/* Conditionally render the thank you message or the form */}
      {isSubmitted ? (
        <div
        >
          <div
          >
            <div
              style={{
                // position: "relative",
                zIndex: 1,
                background: "url(icons/thanks.svg) center center no-repeat",
                backgroundSize: "cover",
                width: "152px",
                height: "152px",
                margin :"auto",
              }}
            ></div>
            <div
            ></div>
          </div>

          <p>
            <strong>Fantastic! Your form was submitted correctly.</strong>
          </p>

          <p>
            Our team is now hard at work to get you appointed with top rated
            digital carriers.
          </p>

          <p>You'll hear from us soon.</p>
        </div>
      ) : (
        <>
          <Row className="step-top mb-4 position-relative">
            <Col>
              <h2
                className="text-center"
                style={{ color: "white", fontSize: "1.6rem" }}
              >
                Setup Your Preferences
              </h2>
              <div className="stepper">
                <div className="progress-container">
                  <ProgressBar now={(step / totalSteps) * 100} />
                </div>
                {steps.map(({ step: stepNum }) => (
                  <div className="step-wrapper" key={stepNum}>
                    <div
                      className={`step ${
                        step >= stepNum ? "completed" : "incomplete"
                      }`}
                    >
                      {step > stepNum ? (
                        <div className="checkmark">✓</div>
                      ) : (
                        <div className="step-count">{stepNum}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          <Row className="step-middle">
            <Col>
              {step === 1 && (
                <Step1SelectStock setSelectedStocks={setSelectedStocks} />
              )}
              {step === 2 && (
                <Step2PreferenceMethod
                  setInfoTypes={setInfoTypes}
                  setShareMethods={setShareMethods}
                />
              )}
              {step === 3 && (
                <Step3Pricing
                  setNotificationDays={setNotificationDays}
                  setNotificationTime={setNotificationTime}
                />
              )}
              {step === 4 && <Step4Submit setUserData={setUserData} />}

            </Col>
              {/* Display submission message */}
              {submissionMessage && (
                <div className="submission-message mt-3 text-center">
                  {submissionMessage}
                </div>
              )}
          </Row>

          <Row className="step-bottom">
            <Col className="text-center">
              <Button
                variant="outline-dark"
                onClick={handlePrevious}
                disabled={step === 1}
                className="back-button dark"
              >
                Back
              </Button>

              {step < totalSteps && (
                <Button
                  variant="dark"
                  onClick={handleNext}
                  disabled={step === totalSteps}
                  className="ml-2"
                >
                  Next
                </Button>
              )}

              {step === totalSteps && (
                <Button
                  variant="dark"
                  onClick={handleSubmitClick}
                  className="ml-2"
                >
                  Submit
                </Button>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Preference;
