import React, { useState } from "react";
import "./FAQSection.css";

const faqData = [
  {
    question:
      "IS IT POSSIBLE TO GET AN EARLY CHECK-IN OR A LATE CHECK-OUT IF MY TRAVEL PLANS CHANGE?",
    answer:
      "If you are planning to arrive before the standard check-in time of 2:00 pm, or leave after 12:00 pm, you are requested to let us know in advance. To ensure a smooth journey, you can call us directly so that we can assist you with best available options tailored to your schedule.."
  },
  {
    question: "ARE PETS ALLOWED AT TAJ SKYLINE, AHMEDABAD?",
    answer:
      "Pets are not allowed at the hotel. However, service animals are permitted."
  },
  {
    question:
      "CAN TAJ SKYLINE AHMEDABAD ARRANGE FOR AN AIRPORT PICK-UP OR DROP-OFF?",
    answer:
      "Yes! We can help with airport transfers. Just email us at reservations.ahmedabad@tajhotels.com at least 24 hours before your arrival with your flight and booking details, or give us a call at +91-79-4040-0000. We’ll take care of the rest!."
  },
  {
    question: "DOES TAJ SKYLINE, AHMEDABAD HAVE A SPA?",
    answer:
      "Yes, our luxury spa, J Wellness Circle, is open daily from 10:00 AM to 9:00 PM. For inquiries or bookings, please call +91-79-4040-0000.."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">

      <div className="faq-title">
        <span className="line"></span>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <span className="line"></span>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggle(index)}
            >
              <p>{item.question}</p>
              <span className="icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
};

export default FAQSection;