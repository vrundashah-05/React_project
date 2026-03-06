import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TajOffers.css';

const offersData = [
  {
    id: 1,
    title: "BREAKFAST INCLUSIVE RATE",
    desc: "Wake up to a symphony of flavours with our delectable breakfast spread and enjoy seamless internet connectivity and flexible cancellation.",
    img: "https://cdn.sanity.io/images/ocl5w36p/prod5/8a52da528de9af99044e1b5bacb09e73cbd66ddf-1400x860.jpg?w=768&auto=format&dpr=2",
    btnText: "LOGIN / JOIN"
  },
  {
    id: 2,
    title: "SOULFUL ABODES",
    desc: "Reconnect with your spirit, awaken your inner wisdom and discover a deeper sense of peace with Soulful Abodes. Embark on your very...",
    img: "https://cdn.sanity.io/images/ocl5w36p/prod5/2ebe2a6eef8d9771ede6d62201dac2ac48ea37e2-1400x860.jpg?w=768&auto=format&dpr=2",
    btnText: "BOOK NOW"
  },
  {
    id: 3,
    title: "PERFECT STAYCATIONS",
    desc: "Retreat into our tranquil urban havens and indulge in an unforgettable staycation that combines the best of experiences and relaxation.",
    img: "https://cdn.sanity.io/images/ocl5w36p/prod5/c49bc6e9213c36aff02555d13f7b25a7d3b6331a-700x430.jpg?w=768&auto=format&dpr=2",
    btnText: "BOOK NOW"
  }
];

const TajOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const itemsVisible = 3;

  // Infinite repeat logic
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % offersData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + offersData.length) % offersData.length);
  };

  return (
    <section className="offers-container">
      <div className="offers-heading">
        <h2 className="title-text"><span className="line"></span> UNPARALLELED OFFERS</h2>
      </div>

      <div className="slider-box">
        <button className="arrow prev" onClick={prevSlide}>&#10094;</button>

        <div className="view-window">
          <div 
            className="card-track" 
            style={{ transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)` }}
          >
            {/* Doubling array ensures images repeat seamlessly */}
            {[...offersData, ...offersData].map((offer, index) => (
              <div key={index} className="offer-item">
                <div className="img-frame">
                  <img src={offer.img} alt={offer.title} />
                </div>
                <div className="content-frame">
                  <h4 className="card-title">{offer.title}</h4>
                  <p className="card-desc-bold">{offer.desc} »</p>
                  <div className="card-footer">
                    <button 
                      className="action-btn" 
                      onClick={() => offer.btnText === "LOGIN / JOIN" ? navigate('/login') : null}
                    >
                      {offer.btnText}
                    </button>
                    <span className="more-link">MORE ›</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default TajOffers;