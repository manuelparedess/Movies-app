import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/movies/Home';
import MovieDetails from '../pages/movies/MovieDetails';
import Layout from '../layout/Layout';
import { getMovie } from '../api/getMovie';
import { getMovieByName } from '../api/getMovieByName';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import UserPage from '../pages/auth/UserPage';
import ProtectedRoute from './ProtectedRoute';
import SearchPage from '../pages/movies/SearchPage';

export const router = createBrowserRouter([
	// Rutas públicas
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},

	// Rutas protegidas
	{
		element: <ProtectedRoute />, // Verifica si está autenticado
		children: [
			{
				path: '/',
				element: <Layout />,
				children: [
					{
						path: 'home',
						element: <Home />,
					},
					{
						path: 'movie/:id',
						element: <MovieDetails />,
						loader: getMovie,
					},
					{
						path: 'user',
						element: <UserPage />,
					},
					{
						path: 'movies',
						element: <SearchPage />,
						loader: getMovieByName,
					}
				],
			},
		],
	},
]);
