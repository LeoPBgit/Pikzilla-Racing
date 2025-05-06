import React from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <img src="/assets/Images/Contact/Hero.jpg" alt="Pikzilla Racing Contact" />
        </div>
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">CONNECT WITH PIKZILLA RACING</h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="contact-intro">
        <div className="container">
          <p className="contact-intro-text">
            We'd love to hear from you! Whether you have questions about our team, want to inquire about sponsorship opportunities, 
            or are interested in joining our team, please don't hesitate to reach out.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <h2 className="contact-form-title">SEND US A MESSAGE</h2>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" className="form-input" placeholder="Enter your name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" id="subject" className="form-input" placeholder="Enter subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea id="message" className="form-textarea" placeholder="Enter your message" required></textarea>
            </div>
            
            <button type="submit" className="form-submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div>
              <h2 className="contact-info-title">VISIT US IN PERSON</h2>
              
              <div className="contact-info">
                <h3 className="contact-info-label">Headquarters</h3>
                <p className="contact-info-value">123 Racing Lane, Speed City, SC 12345</p>
              </div>
              
              <div className="contact-info">
                <h3 className="contact-info-label">Phone Number</h3>
                <p className="contact-info-value">
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </p>
              </div>
              
              <div className="contact-info">
                <h3 className="contact-info-label">Email Address</h3>
                <p className="contact-info-value">
                  <a href="mailto:info@pikzillaracing.com">info@pikzillaracing.com</a>
                </p>
              </div>
              
              <div className="contact-info">
                <h3 className="contact-info-label">Office Hours</h3>
                <p className="contact-info-value">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="contact-info-value">Saturday - Sunday: Closed</p>
              </div>
            </div>
            
            <div className="contact-map">
              <img src="/assets/Images/Contact/Map.png" alt="Pikzilla Racing Location Map" />
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="follow-us-section">
        <div className="container">
          <h2 className="follow-us-title">FOLLOW US ON SOCIAL MEDIA</h2>
          
          <div className="social-links">
            <a href="#" className="social-link">
              <img src="/assets/Vectors/Social Media.svg" alt="Facebook" />
            </a>
            <a href="#" className="social-link">
              <img src="/assets/Vectors/Social Media.svg" alt="Twitter" />
            </a>
            <a href="#" className="social-link">
              <img src="/assets/Vectors/Social Media.svg" alt="Instagram" />
            </a>
            <a href="#" className="social-link">
              <img src="/assets/Vectors/Social Media.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
