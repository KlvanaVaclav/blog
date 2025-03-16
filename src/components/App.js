import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/blogposts" element={<BlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
