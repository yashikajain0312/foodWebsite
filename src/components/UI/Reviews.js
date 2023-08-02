import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/Reviews.css";
import review from "../Images/review3.jpg";
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sameer Sharma",
      comment:
        "One of the oldest restaurant of Bhopal. It is housed in a simple and unassuming building, but the interior is clean, cozy and well-maintained. The atmosphere is relaxed and welcoming, with friendly staff who go above and beyond to make sure you have a great dining experience. ",
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      name: "Palak Tiwari",
      comment: "Awesome Quality!!! I am posting my review little late. I have ordered a Cake and some cookies online as I am based out in London so wanted to reach my parcel to my Loved one on time.. These guys made sure and delivered it before time and packing,Cake and cookies everything was awesome, they were keep on updating me through whatsapp .",
      likes: 0, 
      dislikes: 0,
    },
    {
      id: 3,
      name: "Nancy Sharma",
      comment: "Top quality food and sweets with such a great variety and hygiene, so good to have such a place in the city.",
      likes: 0,
      dislikes: 0,
    },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique ID for the new review
    const id = Math.floor(Math.random() * 1000);
    const reviewToAdd = { ...newReview, id };
    setReviews([...reviews, reviewToAdd]);
    // This code will set form fields empty after clicking on submit button.
    setNewReview({
      name: "",
      comment: "",
    });
    closeModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

   // Function to handle the like and dislike buttons
   const handleLikeDislike = (id, type) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? {
              ...review,
              [type]: review[type] + 1,
            }
          : review
      )
    );
  };


  return (
    <div className="review-container" style={{ backgroundImage: `url(${review})` }}>
      <h1>Customer Reviews</h1>
      <button className="add-review-button" onClick={openModal}>
        Add Your Review
      </button>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <h3>{review.name}</h3>
          <p>{review.comment}</p>
          <div className="review-actions">
            <button onClick={() => handleLikeDislike(review.id, 'likes')}>
              <FaThumbsUp className="icon" />
              {review.likes}
            </button>
            <button onClick={() => handleLikeDislike(review.id, 'dislikes')}>
              <FaThumbsDown className="icon" />
              {review.dislikes}
            </button>
          </div>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Review"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Add Your Review</h2>
        <form className="add-review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Your Review</label>
            <textarea
              id="comment"
              name="comment"
              rows="5"
              value={newReview.comment}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </Modal>
    </div>
  );
};

export default Review;
