import React from 'react';
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiClock
} from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Let’s Connect</h2>
        <p className="contact-subtitle">Open to new opportunities, collaborations, and meaningful conversations.</p>

        <div className="contact-info">
          <div className="info-item">
            <FiMail className="info-icon" />
            <a href="srvenkat16@gmail.com">srvenkat16@gmail.com</a>
          </div>


          <div className="info-item">
            <FiLinkedin className="info-icon" />
            <a href="https://www.linkedin.com/in/Venkatesh-subramaniyan/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/venkatesh-subramaniyan/
            </a>
          </div>

          <div className="info-item">
            <FiGithub className="info-icon" />
            <a href="https://github.com/VenkateshSubramaniyan" target="_blank" rel="noopener noreferrer">
              github.com/VenkateshSubramaniyan
            </a>
          </div>

          <div className="info-item">
            <FiMapPin className="info-icon" />
            <span>Chennai (IST)</span>
          </div>

          <div className="info-item">
            <FiClock className="info-icon" />
            <span>Timezone: PST (GMT-7)</span>
          </div>
        </div>
      </div>
    </section>
  );
}