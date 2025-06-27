
import React from 'react';
import './Testimonials.css'; 

const testimonials = [
  {
    id: 1, name: "Sophia Ali", image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5, comment: "I found the perfect roommate in just 2 days. This platform is a lifesaver!",
  },
  {
    id: 2, name: "David Kim", image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4, comment: "Easy to use and the listings are verified. Highly recommended.",
  },
  {
    id: 3, name: "Anjali Roy", image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5, comment: "The user interface is smooth and the support team was super helpful.",
  },
  {
    id: 4, name: "Chris Evans", image: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5, comment: "Reliable and trustworthy. Found a great flatmate within a week.",
  },
  {
    id: 5, name: "Nina Kapoor", image: "https://randomuser.me/api/portraits/women/58.jpg",
    rating: 4, comment: "Love the filtering options. It made searching super easy.",
  },
  {
    id: 6, name: "Rahul Sharma", image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5, comment: "Smooth process and I got connected with verified users only.",
  },
  {
    id: 7, name: "Emily Chen", image: "https://randomuser.me/api/portraits/women/71.jpg",
    rating: 4, comment: "I appreciate how clean and fast the platform is.",
  },
  {
    id: 8, name: "Mohammed Yusuf", image: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5, comment: "The best roommate app out there. Period.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section mt-7 rounded-3xl">
      <h2 className="testimonial-title">💬 What Our Users Say</h2>
      <p className="testimonial-subtitle">Real feedback from happy roommates who used our platform.</p>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {testimonials.map(({ id, name, image, comment, rating }) => (
            <div className="testimonial-card" key={id}>
              <div className="testimonial-header">
                <img src={image} alt={name} className="testimonial-avatar" />
                <div>
                  <h4>{name}</h4>
                  <div className="testimonial-stars">
                    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                  </div>
                </div>
              </div>
              <p className="testimonial-comment">{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
