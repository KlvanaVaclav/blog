import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout, onLoginClick }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Václav Klvaňa
                </Typography>
                <Box>
                    {/* Show the buttons based on login state */}
                    <Button color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/blogposts">
                        Blog Posts
                    </Button>
                    {isLoggedIn ? (
                        <Button color="inherit" onClick={onLogout}>
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={onLoginClick}>
                            Login
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
