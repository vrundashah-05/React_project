import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("MOBILE");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleContinue = () => {
    // no auth – static name for now
    localStorage.setItem("tajUser", "Vrunda");
    navigate("/");
  };

  return (
    <div className="login-page">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .login-page {
          position: fixed; inset: 0; background: #fff;
          font-family: 'Assistant', sans-serif; z-index: 9999;
          display: flex; flex-direction: column;
        }

        .login-header {
          display: flex; justify-content: space-between;
          align-items: center; padding: 15px 60px;
          border-bottom: 1px solid #f2f2f2;
        }

        .taj-logo { height: 45px; }

        .close-btn {
          font-size: 35px; background: none; border: none;
          cursor: pointer; color: #b4975a;
        }

        .login-container {
          display: flex; flex: 1;
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
          padding: 20px 40px;
        }

        .login-left, .login-right {
          flex: 1;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .divider {
          width: 1px;
          background: #e5e5e5;
          margin: 40px 0;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          letter-spacing: 2px;
          font-size: 20px;
          margin-bottom: 25px;
          text-align: center;
          text-transform: uppercase;
        }

        .neupass-branding { text-align: center; }
        .neupass-logo { height: 38px; }

        .member-benefits-label {
          font-size: 12px;
          letter-spacing: 2px;
          color: #777;
          text-align: center;
          margin: 20px 0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .benefit-card img {
          width: 100%;
          height: 120px;
          object-fit: cover;
        }

        .benefit-card p {
          font-size: 12px;
          margin-top: 8px;
        }

        .tabs {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ddd;
          margin-bottom: 35px;
        }

        .tabs span {
          font-size: 11px;
          padding-bottom: 12px;
          cursor: pointer;
          color: #888;
        }

        .tabs .active {
          color: #b4975a;
          border-bottom: 2px solid #b4975a;
          font-weight: bold;
        }

        .input-box {
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid #333;
          padding-bottom: 12px;
          margin-bottom: 35px;
        }

        .input-box input {
          border: none;
          outline: none;
          font-size: 18px;
          width: 100%;
        }

        .checkbox-container {
          display: flex;
          gap: 12px;
          font-size: 12px;
          margin-bottom: 35px;
        }

        .partners-row {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 35px;
        }

        .partners-row img { height: 30px; }

        .gold-btn {
          background: #b4975a;
          color: white;
          border: none;
          padding: 16px 0;
          letter-spacing: 2.5px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          text-transform: uppercase;
        }

        .continue-btn {
          background: #c2ac7a;
          max-width: 300px;
          margin: 0 auto;
        }
      `}</style>

      <header className="login-header">
        <img
          src="https://cdn.sanity.io/images/ocl5w36p/prod5/5bc445d632d83571807495a20965af52dc068075-100x88.png"
          className="taj-logo"
          alt="TAJ"
        />
        <button className="close-btn" onClick={() => navigate("/")}>×</button>
      </header>

      <main className="login-container">
        <section className="login-left">
          <h2 className="section-title">NOT A MEMBER? JOIN NOW</h2>
          <div className="neupass-branding">
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/045e2745bbdab00e21ad2c5e8232c23ed7868b0f-201x43.png"
              className="neupass-logo"
              alt="NeuPass"
            />
          </div>

          <p className="member-benefits-label">MEMBER BENEFITS</p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/a9f62fe5c3de35934c6f1f7443d59915ed9055fa-480x240.jpg" />
              <p>Exclusive Member Rates</p>
            </div>
            <div className="benefit-card">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/938fba81bbfe03a175ba2d3cc59013bef11bff3b-480x240.jpg" />
              <p>Special Offers for Dining & Spas</p>
            </div>
            <div className="benefit-card">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/0e17d0b6fd12d3192f998142a9c2e892677e4c5b-480x240.jpg" />
              <p>Upto 8% NeuCoins</p>
            </div>
            <div className="benefit-card">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/6ebadc2923edc19bcabca5550950d14e31f99f18-480x240.jpg" />
              <p>Earn & Redeem across stays & dining</p>
            </div>
          </div>

          <button className="gold-btn">JOIN NOW</button>
        </section>

        <div className="divider" />

        <section className="login-right">
          <h2 className="section-title">ALREADY A MEMBER? LOGIN</h2>

          <div className="tabs">
            <span className={activeTab === "MOBILE" ? "active" : ""} onClick={() => setActiveTab("MOBILE")}>MOBILE NUMBER</span>
            <span className={activeTab === "EMAIL" ? "active" : ""} onClick={() => setActiveTab("EMAIL")}>EMAIL ADDRESS</span>
            <span className={activeTab === "MEMBERSHIP" ? "active" : ""} onClick={() => setActiveTab("MEMBERSHIP")}>MEMBERSHIP NUMBER</span>
          </div>

          <div className="input-box">
            <input placeholder="Enter details" />
          </div>

          <div className="checkbox-container">
            <input type="checkbox" />
            <p>By continuing you agree to our Terms & Privacy Policy</p>
          </div>

          <div className="partners-row">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/cec3bee1b95378fa937eab2535b5e6db8c24605f-157x77.svg" />
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/2333faa7e04cfe17aac96e240053585bedbb5634-200x43.png" />
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/790699076f438f8e4d68c1c6f6514c6b95b4e85b-135x84.png" />
          </div>

          <button className="gold-btn continue-btn" onClick={handleContinue}>
            CONTINUE
          </button>
        </section>
      </main>
    </div>
  );
};

export default Login;
