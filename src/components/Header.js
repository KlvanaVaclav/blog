// src/components/Header.js
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
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
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
