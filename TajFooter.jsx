import React, { useState } from "react";
import "./TajFooter.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function TajFooter() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        <div className="footer-left">
          <h1 className="ihcl">IHCL</h1>

          <p className="subscribe-text">SUBSCRIBE FOR LATEST UPDATES</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email Address" />
            <button>SUBSCRIBE</button>
          </div>

          <div className="contact-info">
            <p><strong>FOR BOOKINGS CONTACT</strong></p>
            <p>1-800-111-825</p>

            <p><strong>CUSTOMER SUPPORT</strong></p>
            <p>contacttaj@tajhotels.com</p>
          </div>
        </div>

        <div className="footer-middle">
          <p>reservations@ihcltata.com</p>
          <p>website.feedback@tajhotels.com</p>
        </div>

        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Hotels</li>
            <li>Dining</li>
            <li>Wellness</li>
            <li>Timeless Weddings</li>
            <li>Event Venues</li>
            <li>Taj Magazine</li>
            <li>Sitemap</li>
            <li>HSBC Taj Credit Card</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>&nbsp;</h3>
          <ul>
            <li>About Taj</li>
            <li>Holidays</li>
            <li>Offers</li>
            <li>Gifting</li>
            <li>NeuPass</li>
            <li>Epicure</li>
            <li>Taj Blog</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>CONNECT WITH US</h3>
          <div className="icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="divider"></div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">

        {/* DESTINATIONS */}
        <div className="destinations" onClick={() => setOpen(!open)}>
          <span>DESTINATIONS</span>
          <span className={`plus ${open ? "rotate" : ""}`}>+</span>
        </div>

        {open && (
          <div className="dropdown">
            <p>Mumbai</p>
            <p>Delhi</p>
            <p>Ahmedabad</p>
            <p>Goa</p>
            <p>Jaipur</p>
          </div>
        )}

        {/* BRANDS */}
        <h3 className="brands-title">OUR BRANDS</h3>

        <div className="brands">
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/e5046a3d1d256c98c617751744e35ee50664d8a9-67x65.svg?w=768&auto=format&dpr=2" alt="taj" />
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/3085fecc5894ab49671e253df511a3f724afaa9c-79x65.svg?w=768&auto=format&dpr=2" alt="claridges" />
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/4065f4930e7d569dd7ac2b9324df57c07e1b2c55-81x64.svg?w=768&auto=format&dpr=2" alt="brij" />
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/489fd1a7f0ea3f14e8049c6ca1747d392ab299af-65x65.svg?w=768&auto=format&dpr=2" alt="atmantan" />
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/2a43a4fb9b5c382c42fa4ee1081b182145e98860-139x65.svg?w=768&auto=format&dpr=2" alt="seleqtions" />
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/79414bc6598f358d0a02a03cfba7d345eeeb6e09-86x65.svg?w=768&auto=format&dpr=2" alt="clarks" />
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/09f92d9de0f4cb8b779ca5a5bb66f2a8100380c1-139x65.svg?w=768&auto=format&dpr=2" alt="gateway" />
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/e9e3ba1f31b1002c3c6f1c956b4dba5588ad67a4-134x65.svg?w=768&auto=format&dpr=2" alt="vivanta" />
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/e893ca9f39b726c41642d6038ffe7a4eccc13349-115x65.svg?w=768&auto=format&dpr=2" alt="ginger" />
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/84a9f344a3e809f14fda9448201f63effd4a7d12-68x65.svg?w=768&auto=format&dpr=2" alt="ama" />
        </div>

        {/* COPYRIGHT */}
        <div className="copyright">
          © 2026 The Indian Hotels Company Limited. All Rights Reserved.
        </div>

        {/* FOOTER NAV */}
        <div className="footer-nav">
          <span>Corporate</span>
          <span>Pressroom</span>
          <span>Work With Us</span>
          <span>Terms of Service</span>
          <span>Best Rate Guarantee FAQ</span>
          <span>Accessibility</span>
          <span>Investor Relations</span>
          <span>Partners</span>
          <span>Privacy Policy</span>
          <span>Cookies Policy</span>
        </div>

      </div>
    </footer>
  );
}

export default TajFooter;