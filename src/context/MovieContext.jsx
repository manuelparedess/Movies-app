import { useState, createContext, useEffect } from 'react';
import { getMovies } from '../api/getMovies.js';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    
    const [movies, setMovies] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetchMovies('https://server-movies-app.onrender.com/api/movies');
    }, [reload])

    const fetchMovies = async (url) => {
        setLoading(true);
        try {
            const { results, info } = await getMovies(url);
            setMovies(results);
            setPagination(info);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const onNext = () => {
		fetchMovies(pagination.next);
	}

	const onPrev = () => {
		fetchMovies(pagination.prev);
	}

    const data = {
        movies,
        pagination,
        loading,
        onNext,
        onPrev, 
        setReload
    }

    // el contexto
    return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};