import React from "react";
import "./Facilities.css";
import { FaSuitcase, FaUtensils, FaSpa, FaBed } from "react-icons/fa";

const Facilities = () => {
  return (
    <div className="facilities-section">

      <div className="facilities-title">
        <div className="line"></div>
        <h1>FACILITIES</h1>
      </div>

      <div className="facilities-container">

        {/* HOTEL */}
        <div className="facility-box">
          <div className="facility-heading">
            <FaSuitcase className="icon" />
            <h3>HOTEL</h3>
          </div>
          <ul>
            <li>Accessibility for differently-abled</li>
            <li>Baby-sitter on premises</li>
            <li>Car Rental</li>
            <li>Concierge</li>
          </ul>
          <p className="more">...more</p>
        </div>

        {/* DINING */}
        <div className="facility-box">
          <div className="facility-heading">
            <FaUtensils className="icon" />
            <h3>DINING</h3>
          </div>
          <ul>
            <li>Shamiana (All Day Dining)</li>
            <li>Emperor Lounge (Open 24 hours In Lobby)</li>
            <li>Nonya (Pan Asian Speciality Restaurant, A Lobby Lounge)</li>
            <li>24-hour in-room dining</li>
          </ul>
        </div>

        {/* WELLNESS */}
        <div className="facility-box">
          <div className="facility-heading">
            <FaSpa className="icon" />
            <h3>WELLNESS</h3>
          </div>
          <ul>
            <li>Indoor swimming pool</li>
            <li>J Wellness Circle Spa</li>
            <li>State-of-the-art fitness centre</li>
          </ul>
        </div>

        {/* ROOMS */}
        <div className="facility-box">
          <div className="facility-heading">
            <FaBed className="icon" />
            <h3>ROOMS</h3>
          </div>
          <ul>
            <li>Butler service</li>
            <li>City View</li>
            <li>Interconnecting rooms (subject to availability)</li>
            <li>Mini-Bar</li>
          </ul>
          <p className="more">...more</p>
        </div>

      </div>

    </div>
  );
};

export default Facilities;