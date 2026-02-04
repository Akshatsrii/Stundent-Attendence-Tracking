import React from "react";
import "../styles/contact.css";
const Contact = () => {
  return (
    <main className="contact-page">

      {/* Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We are here to assist you. Reach out to us for admissions, support, or any queries.
        </p>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="contact-grid">

          <div className="contact-card">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <h3>Campus Address</h3>
            <p>EDUFULOW University, Sector 21, Chandigarh, India</p>
          </div>

          <div className="contact-card">
            <i className="fas fa-phone contact-icon"></i>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-card">
            <i className="fas fa-envelope contact-icon"></i>
            <h3>Email</h3>
            <p>support@edufulow.com</p>
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit" className="btn primary-btn">
            Submit
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Us on the Map</h2>
        <iframe
          title="campus-map"
          src="https://maps.google.com/maps?q=Chandigarh&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

    </main>
  );
};

export default Contact;
