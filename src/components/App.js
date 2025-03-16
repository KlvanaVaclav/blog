import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "../themes/blog-theme";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import BlogPost from "../pages/BlogPost";
import LoginModal from "./LoginModal"; // New Login Modal Component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  // Handle login
  const onLogin = () => {
    setIsLoggedIn(true);
    setLoginModalOpen(false); // Close modal after login
  };

  // Handle logout
  const onLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/blog">
        <Header isLoggedIn={isLoggedIn} onLogout={onLogout} onLoginClick={() => setLoginModalOpen(true)} />
        <div className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blogposts" element={<BlogPost />} />
          </Routes>
        </div>
        <Footer />
        {/* Login Modal */}
        <LoginModal open={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} onLogin={onLogin} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
