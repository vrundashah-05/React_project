import React from "react";
import "./TravelStories.css";

const stories = [
  {
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "UNVEILING THE CHARMS OF AHMEDABAD",
    desc: "Visit Ahmedabad and experience the beauty of this remarkable city..."
  },
  {
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    title: "FAMILY GETAWAYS AT AHMEDABAD",
    desc: "Enjoy luxury stays and memorable family moments at Taj..."
  },
  {
    img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
    title: "BUSTLING BAZAARS OF INDIA",
    desc: "Explore the unique shopping experiences India has to offer..."
  }
];

const TravelStories = () => {
  return (
    <div className="travel-section">

      {/* Title */}
      <div className="travel-header">
        <span className="line"></span>
        <h1>TRAVEL STORIES</h1>
      </div>

      {/* Cards */}
      <div className="travel-container">
        {stories.map((item, index) => (
          <div className="travel-card" key={index}>

            <img src={item.img} alt="story" />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button>READ NOW</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default TravelStories;