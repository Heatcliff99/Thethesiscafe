import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: "☕",
      title: "Premium Coffee",
      description: "Sourced from the finest coffee beans and brewed to perfection"
    },
    {
      icon: "🥐",
      title: "Fresh Food",
      description: "Daily fresh ingredients prepared by expert chefs"
    },
    {
      icon: "✨",
      title: "Elegant Ambiance",
      description: "A sophisticated setting perfect for any occasion"
    },
    {
      icon: "💚",
      title: "Great Service",
      description: "Warm hospitality that makes you feel at home"
    }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content container">
          <h1>About Us</h1>
          <p>The story behind Nagpur's most elegant cafe experience</p>
        </div>
      </div>

      <section className="about-story section">
        <div className="container">
          <div className="about-story-content">
            <div className="about-story-text">
              <h2>Our Journey</h2>
              <p>
                The Thesis Cafe was born from a simple idea – to create a space where people can 
                escape the hustle and bustle of daily life and immerse themselves in an atmosphere 
                of sophistication and comfort. Located in the heart of Pratap Nagar, Nagpur, we've 
                become more than just a cafe; we're a community hub.
              </p>
              <p>
                Our name reflects our belief that every cup of coffee, every dish we serve, and every 
                moment spent here should be as carefully crafted and thoughtful as a well-researched thesis. 
                We take pride in our attention to detail, from the ambiance to the presentation of each dish.
              </p>
              <p>
                Whether you're a student looking for a quiet study spot, a professional needing a place 
                for informal meetings, or simply someone who appreciates good food and great coffee, 
                The Thesis Cafe welcomes you with open arms.
              </p>
            </div>
            <div className="about-story-image">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop" alt="Cafe Interior" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-features section">
        <div className="container">
          <div className="section-header">
            <h2>What Makes Us Special</h2>
            <p>Experience the difference at The Thesis Cafe</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-gallery section">
        <div className="container">
          <div className="section-header">
            <h2>Our Space</h2>
            <p>Take a glimpse into our world</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop" alt="Cafe Interior" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop" alt="Coffee Art" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop" alt="Dining Area" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop" alt="Coffee Beans" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" alt="Seating Area" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-location section">
        <div className="container">
          <div className="location-content">
            <div className="location-info">
              <h2>Visit Us</h2>
              <p>We'd love to welcome you to The Thesis Cafe</p>
              <div className="location-details">
                <div className="detail-item">
                  <strong>Address:</strong>
                  <span>Pratap Nagar, Nagpur, Maharashtra, India</span>
                </div>
                <div className="detail-item">
                  <strong>Phone:</strong>
                  <a href="tel:+917123456789">+91 71234 56789</a>
                </div>
                <div className="detail-item">
                  <strong>Email:</strong>
                  <a href="mailto:info@thethesiscafe.com">info@thethesiscafe.com</a>
                </div>
                <div className="detail-item">
                  <strong>Hours:</strong>
                  <span>Mon-Fri: 10AM-11PM | Sat-Sun: 9AM-12AM</span>
                </div>
              </div>
              <a href="https://maps.google.com/?q=Pratap+Nagar+Nagpur" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get Directions
              </a>
            </div>
            <div className="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5!2d79.0!3d21.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzAwLjAiTiA3OcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
                width="100%" 
                height="400" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Thesis Cafe Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
