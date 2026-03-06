import React, { useEffect, useRef } from 'react';
import './TajAbout.css';

const TajAbout = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const children = sectionRef.current.querySelectorAll('.reveal');
    children.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="taj-about-section" ref={sectionRef}>
      {/* Tab Navigation with Hover Effects */}
      <nav className="taj-secondary-nav">
        <ul>
          {['ROOMS & SUITES', 'OVERVIEW', 'OFFERS', 'DINING', 'VENUES', 'WELLNESS', 'GALLERY', 'LOCAL ATTRACTIONS'].map((item) => (
            <li key={item} className={item === 'OVERVIEW' ? 'active-tab' : 'nav-item'}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className="taj-about-container">
        <div className="taj-utility-row reveal fade-in">
          <p className="taj-breadcrumb">Home / Hotels / Taj Skyline Ahmedabad</p>
          <div className="taj-share-btn">
            <span>SHARE</span>
            <i className="icon-share"></i>
          </div>
        </div>

        <div className="taj-about-content">
          {/* Left Side: Text with Slide-In Animation */}
          <div className="taj-text-block reveal slide-left">
            <h2 className="taj-heading">
              <span className="line-deco"></span> A STYLISH STAY
            </h2>
            <p className="taj-description">
              An elegant addition to the city, Taj Skyline, Ahmedabad, draws design 
              inspiration from the timeless spirit of this vibrant metropolis. Much 
              like the city, heritage and cultural ingenuity run deep – from its 
              interiors to its cuisine. 
              <br /><br />
              With easy access to business districts and cultural attractions, 
              this luxurious 5-star hotel in Ahmedabad is a landmark address offering 
              a distinctive sense of place, 
              <span className="taj-more-arrow"> »</span>
            </p>
          </div>

          {/* Right Side: Image with Hover Zoom */}
          <div className="taj-image-block reveal slide-right">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" 
                alt="Taj Skyline Luxury Lobby" 
                className="lobby-img"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Icon with Pulse Animation */}
      <div className="taj-chat-widget">
        <div className="chat-circle pulse">
          <span role="img" aria-label="chat">💬</span>
        </div>
      </div>
    </section>
  );
};

export default TajAbout;