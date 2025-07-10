import MovieCard from '../../components/ux/MovieCard';
import Pagination from '../../components/ui/Pagination';
import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';

const Home = () => {

	const { movies, loading } = useContext(MovieContext);

	return (
		<>
			<div className="container">
				<h2 className='display-6 fw-bold text-light mt-4 mt-md-5 mb-1'>🎬 Available Movies</h2>
				<Pagination />
				{
					loading 
						? (
							<div className="d-flex justify-content-center align-items-center">
								<div className="spinner-border text-primary" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							</div>
						) 
						: (
						<div className="row justify-content-center g-4">
							{
								movies.map(movie => (
									<div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center" key={movie._id}>
										<MovieCard movie={movie} />
									</div>
								))
							}
						</div>
					)
				}
			</div>
		</>
	);
};

export default Home;
