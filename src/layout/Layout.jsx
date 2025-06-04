import { Outlet } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import { Box } from '@mui/material';

const Layout = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Navbar />
            {/* Contenido principal */}
            <Box sx={{ flex: 1 }}>
                <Outlet /> 
            </Box>

            <Footer />
        </Box>
    )
}

export default Layout