import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', mt: 'auto' }}>
            <Typography variant="body2">© 2025 My Blog. All rights reserved.</Typography>
            <Typography variant="body2">Made with ❤️ by Václav Klvaňa</Typography>
        </Box>
    );
};

export default Footer;
