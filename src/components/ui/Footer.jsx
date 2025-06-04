import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 5,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#f5f5f5' : '#333',
                textAlign: 'center',
            }}
        >
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
            >
                <Typography variant="body2" color="text.secondary">
                    Created by Manuel Paredes
                </Typography>
                <Link
                    href="https://github.com/manuelparedess"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                    <GitHubIcon fontSize="small" />
                    GitHub Profile
                </Link>
                <Link
                    href="https://github.com/manuelparedess/server-movies-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="hover"
                >
                    <Box
                        className='me-2'
                        component="img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        alt="Node.js"
                        sx={{ width: 20, height: 20 }}
                    />
                    Server Repository
                </Link>
            </Stack>
        </Box>
    )
}

export default Footer