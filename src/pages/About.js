import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Vítej!
                </Typography>
                <Typography variant="body1">
                    Tady Vašek (✳98) programátor.
                </Typography>
                <Typography variant="body1">
                    Napsal jsem tenhle Blog jako takové místo informací o mém vývoji.
                </Typography>
                <Typography variant="body1">
                    Zatím všechny projekty vedu na svém <Link target="_blank" href="https://github.com/klvanavaclav" >GitHubu</Link>
                </Typography>
                <Typography variant="body1">
                    Blog je založený na Reactu a běží díky hostingu, který poskytuje GitHub.
                </Typography>
            </Box>
        </Container>
    );
};

export default About;
