import { Link } from "react-router-dom"
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Rating,
	Box,
} from '@mui/material';

const MovieCard = ({ movie }) => {
	return (
		<Link className="text-decoration-none w-100" to={`/movie/${movie._id}`}>
			<Card
				sx={{
					maxWidth: 400,
					bgcolor: '#1c1c1c',
					color: 'white',
					borderRadius: 3,
					boxShadow: 4,
					transition: 'transform 0.3s ease',
					'&:hover': {
						transform: 'scale(1.03)',
					},
				}}
			>
				<CardMedia
					component="img"
					height="400"
					image={movie.image}
					alt={movie.title}
				/>
				<CardContent
					sx={{
						backgroundColor: '#303030', 
						py: 2,
						px: 2,
					}}
				>
					<Typography variant="h6" noWrap>
						{movie.title}
					</Typography>
					<Box display="flex" alignItems="center" mt={1}>
						<Rating
							value={movie.rating / 2}
							precision={0.5}
							readOnly
							size="small"
						/>
						<Typography variant="body2" ml={1} color="gray">
							{movie.rating.toFixed(1)}/10
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</Link>
	);
};

export default MovieCard;
