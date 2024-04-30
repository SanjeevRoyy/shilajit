import React from 'react';
import { FaStar } from 'react-icons/fa';
import './RatingSection.css'; // Add CSS file for styling if needed

const RatingSection = () => {
  // Sample data (can be replaced with actual data from API or state)
  const ratings = [
    {
      id: 1,
      rating: 5,
      review: "I've been using shilajit for a month now, and I can feel the difference in my energy levels. It's amazing!",
    },
    {
      id: 2,
      rating: 4,
      review: "Great product! Noticed a significant improvement in my overall well-being after using shilajit for a few weeks.",
    },
    {
        id: 1,
        rating: 5,
        review: "I've been using shilajit for a month now, and I can feel the difference in my energy levels. It's amazing!",
      },
      {
        id: 2,
        rating: 4,
        review: "Great product! Noticed a significant improvement in my overall well-being after using shilajit for a few weeks.",
      },
      {
        id: 1,
        rating: 5,
        review: "I've been using shilajit for a month now, and I can feel the difference in my energy levels. It's amazing!",
      },
      {
        id: 2,
        rating: 4,
        review: "Great product! Noticed a significant improvement in my overall well-being after using shilajit for a few weeks.",
      },
    // Add more ratings as needed
  ];

  return (
    <div className='RatingSection'>
      <h2>Customer Ratings & Reviews</h2>
      <div className='ratings-container'>
        {ratings.map((rating) => (
          <div key={rating.id} className='rating'>
            <div className='stars'>
              {/* Render 5 stars based on the rating */}
              {[...Array(rating.rating)].map((_, index) => (
                <FaStar key={index} className='star' />
              ))}
            </div>
            <p className='review'>{rating.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
