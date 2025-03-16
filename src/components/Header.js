import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Václav Klvaňa
                </Typography>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/blogposts">Blog Posts</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
