import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Container, Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const UserPage = () => {
    const { user } = useContext(AuthContext);
    const { firstname, lastname, email } = user;
    console.log(user);
    const initials = `${firstname[0]}${lastname[0]}`.toUpperCase();

    return (
        <Container maxWidth="sm" sx={{ mt: {xs: 4, sm: 8} }}>
            <Card
                sx={{
                    borderRadius: 4,
                    boxShadow: 4,
                    backgroundColor: '#f5f5f5',
                }}
            >
                <CardContent>
                    <Box display="flex" alignItems="center" gap={3}>
                        <Avatar
                            sx={{ bgcolor: 'primary.main', width: 72, height: 72, fontSize: 28 }}
                        >
                            {initials}
                        </Avatar>
                        <Box>
                            <Typography variant="h5" gutterBottom>
                                {user.firstname} {user.lastname}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {user.email}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default UserPage