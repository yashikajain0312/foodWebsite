// ContactUs.js
import React from 'react';
import '../styles/Contact.css';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import contact from "../Images/contact.jpg";
import Swal from 'sweetalert2';

const Contact = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Thank you for contacting us!',
            text: "we'll get back to you soon!",
          }).then((result) => {
            // Check if the user clicked the "OK" button
            if (result.isConfirmed) {
              // Reset the form fields
              document.getElementById('contactForm').reset();
            }
          });
    }

  return (
    <div
    className="contact-container"
    style={{ backgroundImage: `url(${contact})` }}
  >
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-info-item">
          <FaPhone className="icon" />
          <span>+1 123-456-7890</span>
        </div>
        <div className="contact-info-item">
          <FaEnvelope className="icon" />
          <span>contact@example.com</span>
        </div>
        <div className="contact-info-item">
          <FaMapMarker className="icon" />
          <span>123 Main Street, City, Country</span>
        </div>
      </div>
      <p>
        We would love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form id="contactForm" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
