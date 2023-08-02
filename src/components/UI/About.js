// About.js
import React from "react";
import "../styles/About.css"; // Import your CSS file
import about from "../Images/about.jpg";
import image1 from "../Images/bar1.jpg";
import image2 from "../Images/cafe1.jpg";
import image3 from "../Images/cafe2.jpg";
import image4 from "../Images/restro6.jpg";
import image5 from "../Images/restro7.jpg";
import image6 from "../Images/restro8.jpg";
import image7 from "../Images/restro9.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="about">
        <div className="about-content">
          <h1>About Us</h1>
          <Slider {...sliderSettings}>
            <div className="slider-item">
              <img src={image1} alt="1" />
            </div>
            <div className="slider-item">
              <img src={image2} alt="2" />
            </div>
            <div className="slider-item">
              <img src={image3} alt="3" />
            </div>
            <div className="slider-item">
              <img src={image4} alt="4" />
            </div>
            <div className="slider-item">
              <img src={image5} alt="5" />
            </div>
            <div className="slider-item">
              <img src={image6} alt="6" />
            </div>
            <div className="slider-item">
              <img src={image7} alt="7" />
            </div>
            </Slider>
          <p>
            Welcome to Foodie Delights, your one-stop destination for
            mouth-watering and delicious food. Our passion for food and love for
            flavors have led us on this culinary journey to create unforgettable
            dining experiences for our customers.
          </p>
          <p>
            At Foodie Delights, we believe that food is not just about taste;
            it's an art that brings people together, evokes memories, and
            creates moments of joy. That's why we handpick the finest
            ingredients and prepare each dish with love and care, ensuring that
            every bite is a delightful experience.
          </p>
          <p>
            Our menu is a celebration of diverse cuisines from around the world,
            from classic comfort food to innovative gourmet creations. Whether
            you're craving a hearty burger, a traditional pasta dish, or a
            refreshing mocktail, we've got you covered.
          </p>
          <p>
            But Foodie Delights is more than just a restaurant; it's a place
            where food meets passion, where flavors come alive, and where every
            guest is treated like family. We strive to create a warm and
            inviting atmosphere, where you can relax, unwind, and savor every
            moment.
          </p>
          <p>
            Come join us on this gastronomic journey and let Foodie Delights be
            your go-to destination for all your food cravings. We promise you an
            experience that will tantalize your taste buds and leave you craving
            for more.
          </p>
          <p>Bon appétit!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
