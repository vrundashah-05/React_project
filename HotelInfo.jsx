import React from "react";
import "./HotelInfo.css";

function HotelInfo() {
  return (
    <div className="hotel-info">
      {/* Title */}
      <div className="hotel-title">
        <span className="line"></span>
        <h1>HOTEL INFORMATION</h1>
      </div>

      {/* Info Grid */}
      <div className="info-grid">

        {/* Column 1 */}
        <div className="info-column">
          <div className="info-block">
            <h4>CHECK IN – CHECK OUT</h4>
            <p><strong>Check-in from 2:00 pm</strong></p>
            <p>Check-out until noon</p>
          </div>

          <div className="info-block">
            <h4>ROOMS & SUITES</h4>
            <p><strong>288 rooms and 20 suites</strong></p>
          </div>

          <div className="info-block">
            <h4>CURRENT TEMPERATURE</h4>
            <p><strong>37.23°C</strong></p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="info-column">
          <div className="info-block">
            <h4>DINING</h4>
            <p><strong>3 restaurants</strong></p>
          </div>

          <div className="info-block">
            <h4>WELLNESS</h4>
            <p><strong>J Wellness Circle spa</strong></p>
          </div>

          <div className="info-block">
            <h4>HOTEL ESSENTIALS</h4>
            <p><strong>GSTIN : 24ACAFS6442A1ZM</strong></p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="info-column">
          <div className="info-block">
            <h4>CONTACT</h4>
            <p><strong>reservations.ahmedabad@tajhotels.com</strong></p>
            <span className="map-link">VIEW MAP</span>
          </div>

          <div className="info-block">
            <p>
              Sankalp Square III, Sindhu Bhavan,<br />
              Bodakdev, Ahmedabad, Gujarat, 380059, India
            </p>
          </div>

          <div className="info-block">
            <p><strong>+91 7940400000</strong></p>
          </div>
        </div>

      </div>

      {/* Bottom Links */}
      <div className="bottom-links">
        <span>⬇ DOWNLOAD FACTSHEET</span>
        <span>⬇ HOTEL CLASSIFICATION</span>
      </div>
    </div>
  );
}

export default HotelInfo;