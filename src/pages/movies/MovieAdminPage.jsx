import React, { useState, useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import { createMovie } from '../../api/createMovie';
import { deleteMovie } from '../../api/deleteMovie';
import { Box, Typography, Grid } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../../components/ui/Pagination';
import FormMovies from '../../components/ux/FormMovies';

const MovieAdminPage = () => {
    const { movies, setReload } = useContext(MovieContext);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        releaseYear: 0,
        genre: '',
        director: '',
        actors: [''],
        description: '',
        rating: 0,
        image: null,
    });

    const handleDelete = async (id) => {
        await deleteMovie(id);
        setReload(prev => !prev);
        setSuccess('Deleted Movie');
        setTimeout(() => { setSuccess(false) }, 3000)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        try {
            const res = await createMovie(formData);
            setSuccess('Movie created')
            setError(false);
        } catch (error) {
            setSuccess(false);
            setError('Error creating movie');
        }
    };

    return (
        <Box sx={{ backgroundColor: '#06114a', minHeight: '100vh', p: { xs: 2, md: 4}, color: 'white' }}>
            <div className='d-flex align-items-center mb-2'>
                <Typography sx={{fontSize: {xs: '1rem', sm:'1.5rem'}}}>
                    Admin Panel -
                </Typography>
                <Link className="navbar-brand text-light ff-anton fs-3 me-2" to={'/home'}>MOVIES APP</Link>
                <LiveTvIcon fontSize="large" sx={{ color: 'white' }} />
            </div>

            <FormMovies formData={formData} handleSubmit={handleSubmit} setFormData={setFormData} error={error} success={success} />

            <Typography sx={{fontSize: {xs: '1.25rem', sm:'1.65rem'}}}>
                Películas existentes
            </Typography>

            <Grid container spacing={1}>
                {success == 'Deleted Movie' && <p className="alert alert-danger mt-2">{success}</p>}
                <Pagination />
                <div className="row">
                    {movies.map((movie) => (
                        <div className="col-md-4 mb-4" key={movie._id}>
                            <div className="card h-100">
                                {movie.image && (
                                    <img
                                        src={movie.image} // Ajustá esto a tu backend real
                                        className="card-img-top"
                                        alt={movie.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.description?.substring(0, 100)}...</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(movie._id)}>Eliminar</button>
                                    <button className="btn btn-primary btn-sm" onClick={() => {navigate(`/admin/edit/${movie._id}`)}}>Editar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Grid>
        </Box>
    );
};

export default MovieAdminPage;