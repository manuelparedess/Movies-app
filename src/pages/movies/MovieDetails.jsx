import { useLoaderData, useNavigate } from "react-router-dom";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Box,
	List,
	ListItem,
	Divider,
} from '@mui/material';
import 'animate.css';

const MovieDetails = () => {

	const navigate = useNavigate();
	const { movie } = useLoaderData();

	const onReturn = () => {
		navigate(-1);
	}

	return (
		<Box sx={{ px: { xs: 2, md: 6 }, py: 5, overflowX: 'auto' }}>
			<Grid
				container
				spacing={4}
				alignItems="flex-start"
				wrap="nowrap" // 🔑 Esto evita que se apilen
			>
				{/* Imagen */}
				<Grid
					item
					xs={6}
					md={4}
					className="animate__animated animate__backInLeft"
					sx={{ minWidth: '300px' }}
				>
					<Card sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
						<CardMedia
							component="img"
							height="500"
							image={movie.image}
							alt={movie.title}
						/>
					</Card>
				</Grid>

				{/* Información */}
				<Grid
					item
					xs={6}
					md={8}
					className="animate__animated animate__backInRight"
					sx={{ minWidth: '400px' }}
				>
					<Card
						sx={{
							backgroundColor: '#303030', 
							color: 'white',
							borderRadius: 3,
							px: 3,
							py: 4,
							height: '100%',
						}}
					>
						<CardContent>
							<Typography variant="h4" gutterBottom>
								{movie.title}
							</Typography>
							<Typography variant="body1" color="gray" paragraph>
								{movie.description}
							</Typography>

							<Divider sx={{ my: 2, borderColor: '#444' }} />

							<Typography variant="subtitle1">
								<strong>Rating:</strong> {movie.rating}/10
							</Typography>

							<Box mt={2}>
								<Typography variant="subtitle1">
									<strong>Actors:</strong>
								</Typography>
								<List dense sx={{ color: 'gray' }}>
									{movie.actors.map((actor) => (
										<ListItem key={actor} sx={{ pl: 2 }}>
											{actor}
										</ListItem>
									))}
								</List>
							</Box>

							<Box mt={1}>
								<Typography variant="subtitle1">
									<strong>Director:</strong>
								</Typography>
								<Typography variant="body2" color="gray" sx={{ pl: 2 }}>
									{movie.director}
								</Typography>
							</Box>

							<Box mt={1}>
								<Typography variant="subtitle1">
									<strong>Genres:</strong>
								</Typography>
								<Typography variant="body2" color="gray" sx={{ pl: 2 }}>
									{movie.genre}
								</Typography>
							</Box>

							<Box mt={4}>
								<Button
									variant="outlined"
									color="info"
									onClick={onReturn}
									sx={{ borderRadius: 2 }}
								>
									Return
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default MovieDetails;


/*


5. hacer un admin para eliminar y agregar peliculas

7. footer 

*/