// src/components/Header.js
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Use auth context
import LoginModal from "./LoginModal"; // Import the Login Modal component

const Header = () => {
    const { isLoggedIn, logout } = useAuth(); // Access login state and functions
    const [openLoginModal, setOpenLoginModal] = useState(false); // Modal state

    const handleLoginClick = () => {
        setOpenLoginModal(true); // Open the login modal when login button is clicked
    };

    const handleLoginClose = () => {
        setOpenLoginModal(false); // Close the login modal
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Václav Klvaňa
                    </Typography>
                    <Box>
                        <Button color="inherit" component={Link} to="/about">
                            About
                        </Button>
                        <Button color="inherit" component={Link} to="/blogposts">
                            News
                        </Button>

                        {isLoggedIn ? (
                            <Button color="inherit" onClick={logout}>
                                Logout
                            </Button>
                        ) : (
                            <Button color="inherit" onClick={handleLoginClick}>
                                Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Login Modal */}
            <LoginModal open={openLoginModal} onClose={handleLoginClose} onLogin={handleLoginClose} />
        </>
    );
};

export default Header;
