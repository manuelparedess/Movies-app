import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import {
	Box,
	IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Pagination = () => {

	const { pagination, onNext, onPrev } = useContext(MovieContext)

	return (
		<Box display="flex" alignItems="center" sx={{ width: '100%' }} mb={2} gap={2}>
			{/* Prev Button */}
			{pagination.prev && (
				<IconButton
					className="me-auto"
					onClick={onPrev}
					color="error"
				>
					<ArrowBackIcon fontSize="large" sx={{display: {xs: 'none', sm: 'inherit'}}} />
					<ArrowBackIcon fontSize="medium" sx={{display: {xs: 'inherit', sm: 'none'}}} />
				</IconButton>
			)}

			{/* Next Button */}
			{pagination.next && (
				<IconButton
					className="ms-auto"
					onClick={onNext}
					color="success"
				>
					<ArrowForwardIcon fontSize="large" sx={{display: {xs: 'none', sm: 'inherit'}}}  />
					<ArrowForwardIcon fontSize="medium" sx={{display: {xs: 'inherit', sm: 'none'}}}  />
				</IconButton>
			)}
		</Box>
	);
};

export default Pagination;
