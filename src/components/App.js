import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import BlogPost from '../pages/BlogPost';

function App() {
  return (
    <div className='App'>
      <Router basename="/blog">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blogposts" element={<BlogPost />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;