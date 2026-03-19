import React, { useState } from "react";
import "./LocationSection.css";

const LocationSection = () => {
  const [open, setOpen] = useState("getting");

  const toggle = (section) => {
    setOpen(open === section ? "" : section);
  };

  return (
    <div className="location-section">

      {/* LEFT SIDE */}
      <div className="location-left">

        <div className="title">
          <span className="line"></span>
          <h1>LOCATION & DIRECTIONS</h1>
        </div>

        {/* GETTING HERE */}
        <div className="accordion">
          <div className="accordion-header" onClick={() => toggle("getting")}>
            <h3>GETTING HERE</h3>
            <span>{open === "getting" ? "−" : "+"}</span>
          </div>

          {open === "getting" && (
            <div className="accordion-content">
              <p>
                Sankalp Square III, Sindhu Bhavan, Bodakdev, Ahmedabad,
                Gujarat, 380 059, India
              </p>
              <a href="#" className="map-link">
                OPEN GOOGLE MAPS →
              </a>
            </div>
          )}
        </div>

        {/* AIRPORT */}
        <div className="accordion">
          <div className="accordion-header" onClick={() => toggle("airport")}>
            <h3>AIRPORT</h3>
            <span>{open === "airport" ? "−" : "+"}</span>
          </div>

          {open === "airport" && (
            <div className="accordion-content">
              <p>
                Sardar Vallabhbhai Patel International Airport is approx
                16 km from the hotel.
              </p>
              <p>Travel time: 25–30 minutes by car.</p>
            </div>
          )}
        </div>

        {/* LOCAL TRANSPORT */}
        <div className="accordion">
          <div className="accordion-header" onClick={() => toggle("local")}>
            <h3>LOCAL TRANSPORTATION</h3>
            <span>{open === "local" ? "−" : "+"}</span>
          </div>

          {open === "local" && (
            <div className="accordion-content">
              <p>Taxi, Auto Rickshaw and App-based cabs available.</p>
              <p>Nearby metro & bus connectivity available.</p>
            </div>
          )}
        </div>

      </div>

      {/* RIGHT SIDE MAP */}
      <div className="location-right">
  <iframe
    title="map"
    src="https://www.google.com/maps?q=Taj+Skyline+Ahmedabad&output=embed"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>
    </div>
  );
};

export default LocationSection;