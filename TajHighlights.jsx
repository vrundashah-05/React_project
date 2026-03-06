import React, { useState } from 'react';
import './TajHighlights.css';

const highlightsData = [
  { 
    id: 1, 
    title: "CLOSE PROXIMITY TO BUSINESS DISTRICTS", 
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" 
  },
  { 
    id: 2, 
    title: "RICH INDO-SARACENIC ARCHITECTURE", 
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" 
  },
  { 
    id: 3, 
    title: "HUGE POOL AND DECK OVERLOOKING THE CITY", 
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1000" 
  },
  { 
    id: 4, 
    title: "SICHUAN AND PAN-ASIAN FLAIR AT NONYA", 
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" 
  },
  { 
    id: 5, 
    title: "EXTRA SPACIOUS LUXURY ROOMS", 
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1000" 
  },
  { 
    id: 6, 
    title: "AN ELEGANT AND STYLISH LOBBY", 
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000" 
  }
];

const TajHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsVisible = 3; // Based on the 3-column layout in the video
  const maxIndex = highlightsData.length - itemsVisible;

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="highlights-section">
      <div className="highlights-header">
        <div className="header-left">
          <h2 className="highlights-title">
            <span className="gold-line"></span> HIGHLIGHTS
          </h2>
        </div>
        <div className="header-right">
          <p className="highlights-intro">
            Discover a world where heritage and contemporary luxury seamlessly blend at Taj Skyline, Ahmedabad. With exceptional service and modern facilities, this is where every experience is an exceptional one.
          </p>
        </div>
      </div>

      <div className="slider-wrapper">
        <button 
          className={`slider-arrow prev ${currentIndex === 0 ? 'hidden' : ''}`} 
          onClick={prevSlide}
        >
          &#10094;
        </button>

        <div className="slider-viewport">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)` }}
          >
            {highlightsData.map((item) => (
              <div key={item.id} className="highlight-card">
                <div className="img-container">
                  <img src={item.img} alt={item.title} className="highlight-img" />
                </div>
                <p className="card-label">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <button 
          className={`slider-arrow next ${currentIndex === maxIndex ? 'hidden' : ''}`} 
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default TajHighlights;