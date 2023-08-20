// Home.js
import React from 'react';
import '../styles/Home.css';
import foodImage from '../Images/home4.jpg';

const Home = () => {
    
  const featuredItems = [
    { id: 1, name: 'Pizza', price: 10.123 },
    { id: 2, name: 'Burger', price: 8.99 },
    { id: 3, name: 'Manchurian', price: 5.99 },
    { id: 3, name: 'Pasta', price: 7.99 },
    { id: 3, name: 'Mocktail', price: 2.99 },
    { id: 3, name: 'Momos', price: 7.99 },
    { id: 3, name: 'Noodles', price: 4.99 },
  ];

  return (
    <div className="home-container" style={{ backgroundImage: `url(${foodImage})` }}>
    <div className="home">
      <h1 className='text'>Welcome to Food App!!</h1>
      <p className='text'>Explore our delicious menu and place your order online.</p>
      <h2 className='text'>Featured Items</h2>
      <div className="featured-items">
        {featuredItems.map((item) => (
          <div key={item.id} className="featured-item">
            <h3 className='text'>{item.name}</h3>
            <p className='text'>Price: ${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
