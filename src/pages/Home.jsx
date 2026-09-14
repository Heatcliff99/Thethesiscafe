import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing ambiance and delicious food! The Thesis Cafe is definitely my new favorite spot in Nagpur.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      rating: 5,
      text: "Perfect place for work and relaxation. Great coffee and the staff is very friendly.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Anjali Deshmukh",
      rating: 4,
      text: "Love the premium feel and the menu has great variety. Highly recommended!",
      date: "2 weeks ago"
    }
  ];

  const menuHighlights = [
    {
      id: 1,
      name: "Signature Coffee",
      description: "Artisan brewed coffee with rich aroma",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Gourmet Sandwiches",
      description: "Freshly made with premium ingredients",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Dessert Platter",
      description: "Assorted cakes and pastries",
      price: "₹350",
      image: "https://images.unsplash.com/photo-1551024601-bec0273e8a9e?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Fresh Smoothies",
      description: "Healthy blends of seasonal fruits",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title fade-in">Welcome to The Thesis Cafe</h1>
          <p className="hero-subtitle fade-in">Where elegance meets exceptional taste in the heart of Nagpur</p>
          <div className="hero-buttons fade-in">
            <Link to="/menu" className="btn-primary">View Menu</Link>
            <a href="tel:+917123456789" className="btn-secondary">Book a Table</a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                The Thesis Cafe is more than just a cafe – it's an experience. Located in the vibrant Pratap Nagar 
                area of Nagpur, we bring you a perfect blend of sophisticated ambiance, exceptional cuisine, and 
                warm hospitality.
              </p>
              <p>
                Whether you're looking for a quiet corner to work, a place to catch up with friends, or simply 
                want to indulge in some premium coffee and delicacies, The Thesis Cafe is your destination.
              </p>
              <Link to="/about" className="btn-primary">Learn More</Link>
            </div>
            <div className="about-images">
              <div className="about-image-grid">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop" alt="Cafe Interior" />
                <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop" alt="Coffee Art" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="menu-highlights section">
        <div className="container">
          <div className="section-header">
            <h2>Menu Highlights</h2>
            <p>Discover our most loved items</p>
          </div>
          <div className="menu-grid">
            {menuHighlights.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-card-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="menu-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-cta">
            <Link to="/menu" className="btn-primary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Live Reviews */}
      <section className="reviews-preview section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Real reviews from real customers</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill={i < review.rating ? "#C9A962" : "#ddd"}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
          <div className="reviews-cta">
            <Link to="/reviews" className="btn-secondary">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Visit Us Today</h2>
            <p>Experience the perfect blend of ambiance and taste</p>
            <div className="cta-buttons">
              <a href="tel:+917123456789" className="btn-primary">Reserve a Table</a>
              <Link to="/about" className="btn-secondary">Get Directions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
