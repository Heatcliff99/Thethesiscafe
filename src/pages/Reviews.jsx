import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing ambiance and delicious food! The Thesis Cafe is definitely my new favorite spot in Nagpur. The staff is incredibly friendly and the coffee is top-notch.",
      date: "2 days ago",
      source: "Google"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      rating: 5,
      text: "Perfect place for work and relaxation. Great coffee and the staff is very friendly. The wifi is fast and the atmosphere is conducive to productivity.",
      date: "1 week ago",
      source: "Google"
    },
    {
      id: 3,
      name: "Anjali Deshmukh",
      rating: 4,
      text: "Love the premium feel and the menu has great variety. Highly recommended! The desserts are absolutely divine.",
      date: "2 weeks ago",
      source: "Instagram"
    },
    {
      id: 4,
      name: "Vikram Patel",
      rating: 5,
      text: "Best cafe in Pratap Nagar! The pasta is incredible and the coffee art is beautiful. Will definitely come back again.",
      date: "3 weeks ago",
      source: "Google"
    },
    {
      id: 5,
      name: "Sneha Kulkarni",
      rating: 5,
      text: "A perfect blend of elegance and comfort. Great for meetings or casual hangouts. The smoothies are refreshing!",
      date: "1 month ago",
      source: "Facebook"
    },
    {
      id: 6,
      name: "Arjun Singh",
      rating: 4,
      text: "Excellent service and wonderful ambiance. The chocolate lava cake is a must-try. Slightly pricey but worth it.",
      date: "1 month ago",
      source: "Google"
    }
  ]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      const review = {
        id: reviews.length + 1,
        ...newReview,
        date: "Just now",
        source: "Website"
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: '', rating: 5, text: '' });
    }
  };

  const averageRating = (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="reviews-page">
      <div className="reviews-hero">
        <div className="reviews-hero-overlay"></div>
        <div className="reviews-hero-content container">
          <h1>Customer Reviews</h1>
          <p>See what our valued customers have to say about their experience</p>
          <div className="rating-summary">
            <div className="average-rating">{averageRating}</div>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill={i < Math.round(averageRating) ? "#C9A962" : "#ddd"}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="total-reviews">Based on {reviews.length} reviews</span>
          </div>
        </div>
      </div>

      <section className="reviews-section section">
        <div className="container">
          <div className="reviews-layout">
            <div className="reviews-list">
              <h2>All Reviews</h2>
              <div className="reviews-grid-full">
                {reviews.map((review) => (
                  <div key={review.id} className="review-card-full">
                    <div className="review-card-header">
                      <div className="reviewer-avatar">
                        {review.name.charAt(0)}
                      </div>
                      <div className="reviewer-details">
                        <h4>{review.name}</h4>
                        <div className="review-meta">
                          <div className="review-rating-small">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} viewBox="0 0 24 24" fill={i < review.rating ? "#C9A962" : "#ddd"}>
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="review-source">{review.source}</span>
                        </div>
                      </div>
                      <span className="review-date-full">{review.date}</span>
                    </div>
                    <p className="review-text-full">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="review-form-container">
              <div className="review-form-wrapper">
                <h2>Write a Review</h2>
                <p>Share your experience with others</p>
                <form onSubmit={handleSubmitReview} className="review-form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Rating</label>
                    <div className="rating-input">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className={`star-btn ${newReview.rating >= star ? 'active' : ''}`}
                        >
                          <svg viewBox="0 0 24 24" fill={newReview.rating >= star ? "#C9A962" : "#ddd"}>
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Your Review</label>
                    <textarea
                      value={newReview.text}
                      onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                      placeholder="Share your experience..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary submit-btn">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-reviews section">
        <div className="container">
          <div className="cta-reviews-content">
            <h2>Experience It Yourself</h2>
            <p>Visit us and create your own memorable experience</p>
            <a href="tel:+917123456789" className="btn-primary">Book a Table Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
