import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TajHero.css";

const images = [
  "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
  "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg"
];

function TajHero() {
  const [current, setCurrent] = useState(0);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Get name from localStorage
  useEffect(() => {
    const name = localStorage.getItem("tajUser");
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img 
            src="https://cdn.sanity.io/images/ocl5w36p/prod5/5bc445d632d83571807495a20965af52dc068075-100x88.png" 
            alt="TAJ" 
            style={{ height: "45px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>

        <ul className="nav-links">
          <li>DESTINATIONS</li>
          <li>HOTELS</li>
          <li>EXPERIENCES</li>
          <li>OFFERS</li>
          <li>MEMBERSHIPS</li>
          <li>MORE</li>
        </ul>

        <div className="nav-buttons" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          
          {/* USER NAME */}
          {userName && (
            <span
              style={{
                color: "rgb(248, 244, 237)",
                fontSize: "20px",
                letterSpacing: "1px",
                fontWeight: "600"
              }}
            >
              Hi, {userName}
            </span>
          )}

          {/* LOGIN BUTTON (unchanged) */}
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            LOGIN / SIGN UP
          </button>

          <button className="book-stay">BOOK A STAY</button>
        </div>
      </nav>

      {/* Content */}
      <div className="content">
        <h1 className="fade-in">TAJ SKYLINE, AHMEDABAD</h1>

        <div className="booking-box slide-up">
          <span>Taj Skyline, Ahmedabad</span>
          <span>29 Jan 2026 — 30 Jan 2026</span>
          <span>1 Guest — 1 Room</span>
          <span>Special Code</span>
          <button className="book-now">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}

export default TajHero;
