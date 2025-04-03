// src/components/App.js
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from '../context/BlogContext';
import theme from "../themes/blog-theme";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import BlogPost from "../pages/BlogPost";

function App() {
  return (
    <BlogProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </BlogProvider>
  );
}

export default App;
