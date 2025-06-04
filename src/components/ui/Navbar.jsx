import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Navbar = () => {

	const { logout } = useContext(AuthContext);
	const navigate = useNavigate();

	const onLogout = () => {
		logout();
		navigate('/login');
	}

	return (
		<nav className="navbar bg-oficial px-5 shadow">
			<div className="d-flex align-items-center justify-content-between w-100">
				<div className='d-flex align-items-center'>
					<Link className="navbar-brand text-light ff-anton fs-3 me-2" to={'/home'}>MOVIES APP</Link>
					<LiveTvIcon fontSize="large" sx={{ color: 'white' }} />
				</div>
				<div className='d-flex'>
					<SearchIcon className='me-2' fontSize="large" sx={{ color: 'white' }} />
					<input type="email" className="form-control w-50 me-2" placeholder="Search movie ..." />
					<Button variant="contained">Search</Button>
				</div>
				<div>
					<AccountCircleIcon onClick={() => {navigate('/user')}} className='me-2' fontSize="large" sx={{ color: 'white', '&:hover': {cursor: 'pointer'} }} />
					<ExitToAppIcon onClick={onLogout} fontSize="large" sx={{ color: 'red', '&:hover': {cursor: 'pointer'}}} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
