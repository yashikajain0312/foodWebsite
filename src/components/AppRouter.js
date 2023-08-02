// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './UI/Navbar';
import Home from './UI/Home';
import About from './UI/About';
import Contact from './UI/Contact';
import Reviews from './UI/Reviews';

const AppRouter = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories"/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
