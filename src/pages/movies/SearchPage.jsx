import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom';
import MovieCard from '../../components/ux/MovieCard';
import { Box, Typography, Button } from '@mui/material';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SearchIcon from '@mui/icons-material/Search';

const SearchPage = () => {

    const { movies } = useLoaderData();
    console.log(movies);
    const { search } = useLocation();
    const q = new URLSearchParams(search).get('q');


    return (
        <div className="container">
            <h2 className='display-6 fw-bold text-light my-3 my-md-5 '>Results to : <span className='text-primary'>{q}</span></h2>
            {
                <div className="row justify-content-center g-4">
                    {
                        movies.length === 0
                            ? <div className="d-flex flex-column align-items-center justify-content-center text-center py-5">
                                <MovieFilterIcon style={{ fontSize: 80, color: 'white', marginBottom: 16 }} />
                                <h5 className='text-light'>No results found for:</h5>
                                <h4 className="text-primary mb-3">“{q}”</h4>
                            </div>
                            : movies.map(movie => (
                                <div className="col-12 col-sm-6 col-md-4" key={movie._id}>
                                    <MovieCard movie={movie} />
                                </div>
                            ))
                    }
                </div>

            }
        </div>
    )
}

export default SearchPage