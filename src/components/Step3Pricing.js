import React from "react";
import "./Step3Pricing.css";

const Step3Pricing = () => {
  return (
    <div className="step-content">
      <h3>Congratulations!</h3>
      <p>You're one of our first users, and you've unlocked a special offer!</p>
      <p>
        The original price for our basic plan was <strong>₹99</strong> per
        month, but because you joined us before the official launch, you get to
        enjoy all the basic features for <strong>FREE</strong> for a limited
        time!
      </p>
      <p style={{ color: "white"}}>
        Hurry up! Enjoy all the basic features at no cost.
      </p>
      <p style={{ fontSize: "small", color: "#eb0000", fontWeight: "600" }}>
        The product will be launched soon!
      </p>
    </div>
  );
};

export default Step3Pricing;
