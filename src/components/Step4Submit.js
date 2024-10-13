import React, { useEffect, useState } from "react";
import "./Step4Submit.css";
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

const Step4Submit = () => {
  // State to store user data
  const [userData, setUserData] = useState(null);
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [infoTypes, setInfoTypes] = useState([]);
  const [shareMethods, setShareMethods] = useState([]);
  const [notificationDays, setNotificationDays] = useState("");
  const [notificationTime, setNotificationTime] = useState("7:00");

  const handleLoginSuccess = (credentialResponse) => {
    const decodedUser = jwtDecode(credentialResponse.credential);
    localStorage.setItem('user', JSON.stringify(decodedUser));
    setUserData(decodedUser);
  };

  useEffect(() => {
    // Fetch user data from local storage or API
    const user = JSON.parse(localStorage.getItem("user"));
    const stocks = JSON.parse(localStorage.getItem("selectedStocks")) || [];

    // Fetch user preferences object first
    const userPreferences = JSON.parse(
      localStorage.getItem("userPreferences")
    ) || {
      infoTypes: [],
      shareMethods: [],
      notificationTime: "7:00",
      notificationDays: "",
    };

    // Access individual properties from userPreferences
    const info = userPreferences.infoTypes || [];
    const share = userPreferences.shareMethods || [];
    const days = userPreferences.notificationDays || "";
    const time = userPreferences.notificationTime || "7:00";

    setUserData(user);
    setSelectedStocks(stocks);
    setInfoTypes(info);
    setShareMethods(share);
    setNotificationDays(days);
    setNotificationTime(time);
  }, []);

  return (
    <div className="step-content">
      <div className="verification-section">
        <h4>Verification Summary</h4>

        {/* Google Login Status */}
        <div className="verification-item">
          <div className="item">
            <span className="item-header" >Google Login:</span>
            {userData && (
              <div className="item-content">
                <span className="stocks-count">
                  {userData.name} 
                </span>
              </div>
            )}
            {userData ? (
              <span className="status success">✓</span>
            ) : (
              <span className="status failure">Not Logged In</span>
            )}
          </div>
          {!userData && (
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
          )}
        </div>

        {/* Selected Stocks */}
        <div className="verification-item">
          <div className="item">
            <span className="item-header">Selected Stocks:</span>
            {selectedStocks.length > 0 && (
              <div className="item-content">
                {/* Display number of stocks selected */}
                <span className="stocks-count">
                  {selectedStocks.length} stock
                  {selectedStocks.length > 1 ? "s" : ""} selected
                </span>
              </div>
            )}
            {selectedStocks.length > 0 ? (
              <span className="status success">✓</span>
            ) : (
              <span className="status failure">No stock selected</span>
            )}
          </div>
        </div>

        {/* Information Types */}
        <div className="verification-item">
          <div className="item">
            <span className="item-header">Information Types:</span>
            {infoTypes.length > 0 && (
              <div className="item-content">
                <span className="info-types-display">
                  {infoTypes.join(", ")}
                </span>
              </div>
            )}
            {infoTypes.length > 0 ? (
              <span className="status success">✓</span>
            ) : (
              <span className="status failure">No preference selected</span>
            )}
          </div>
        </div>

        {/* Share Methods */}
        <div className="verification-item">
          <div className="item">
            <span className="item-header">Share Methods:</span>
            {shareMethods.length > 0 && (
              <div className="item-content">
                <span className="share-methods-display">
                  {shareMethods.join(", ")}
                </span>
              </div>
            )}
            {shareMethods.length > 0 ? (
              <span className="status success">✓</span>
            ) : (
              <span className="status failure">No share method selected</span>
            )}
          </div>
        </div>

        {/* Notification Days */}
        <div className="verification-item">
          <div className="item">
            <span className="item-header">Notification Days:</span>
            {notificationDays && (
              <div className="item-content">{notificationDays}</div>
            )}
            {notificationDays ? (
              <span className="status success">✓</span>
            ) : (
              <span className="status failure">
                No notification days selected
              </span>
            )}
          </div>
        </div>

        {/* Notification Time */}
        <div className="verification-item">
          <div className="item">
            <span className="item-header">Notification Time:</span>
            {notificationTime && (
              <div className="item-content">
                <span>{notificationTime}</span>
              </div>
            )}
            {notificationTime ? (
              <span className="status success">✓</span>
            ) : (
              <span className="status failure">
                No notification time selected
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Submit;
