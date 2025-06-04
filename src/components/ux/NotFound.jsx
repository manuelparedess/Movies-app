import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundColor: '#06114a', 
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
                <Typography variant="h3" component="h1" mt={3} gutterBottom sx={{ color: '#ffffff' }}>
                    404 - Page Not Found
                </Typography>
                <Typography variant="body1" sx={{ color: '#cfd8dc' }} paragraph>
                    Sorry, the page you’re looking for doesn’t exist or may have been moved.
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate('/home')}
                >
                    Back to Home
                </Button>
            </Container>
        </Box>
    );
};

export default NotFound