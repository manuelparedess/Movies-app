import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Typography } from '@mui/material';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';
import { Menu } from '@mui/icons-material';

const Navbar = () => {

	const [search, setSearch] = useState('');
	const { user, logout } = useContext(AuthContext);
	const navigate = useNavigate();

	//Drawer
	const [open, setOpen] = useState(false);

	const handleNavigation = (path) => {
		navigate(path);
		setOpen(false);
	};

	const onLogout = () => {
		logout();
		navigate('/login');
	}

	return (
		<>
			<nav className="navbar bg-oficial px-5 shadow d-md-flex d-none">
				<div className="d-flex align-items-center justify-content-between w-100">
					<div className='d-flex align-items-center'>
						<Link className="navbar-brand text-light ff-anton fs-3 me-2" to={'/home'}>MOVIES APP</Link>
						<LiveTvIcon fontSize="large" sx={{ color: 'white' }} />
					</div>
					<div className='d-flex'>
						<SearchIcon className='me-2' fontSize="large" sx={{ color: 'white' }} />
						<input
							type="text"
							className="form-control w-50 me-2"
							placeholder="Search movie ..."
							value={search}
							onChange={(e) => { setSearch(e.target.value) }}
						/>
						<Button onClick={() => { navigate(`/movies?q=${encodeURIComponent(search)}`) }} variant="contained">Search</Button>
					</div>
					<div className='d-flex'>
						{
							user.admin
								? (<Link className="btn btn-primary me-2" to={'/admin/movies'}>Admin Movies</Link>)
								: ''
						}
						<AccountCircleIcon onClick={() => { navigate('/user') }} className='me-2' fontSize="large" sx={{ color: 'white', '&:hover': { cursor: 'pointer' } }} />
						<ExitToAppIcon onClick={onLogout} fontSize="large" sx={{ color: 'red', '&:hover': { cursor: 'pointer' } }} />
					</div>
				</div>
			</nav>


			{/* Navbar mobile */}
			<nav className="navbar bg-oficial shadow d-md-none d-flex px-2 w-100 m-0">
				<div className="container-fluid p-0">
					<div className="row align-items-center justify-content-between w-100 m-0">
						<div className="col-1 d-flex align-items-center justify-content-start p-0">
							<IconButton onClick={() => setOpen(true)}>
								<Menu fontSize="medium" sx={{ color: 'white' }} />
							</IconButton>
						</div>
						<div className="col-10 d-flex align-items-center justify-content-center p-0">
							<Link className="navbar-brand text-light ff-anton fs-3 me-2" to={'/home'}>
								MOVIES APP
							</Link>
							<LiveTvIcon fontSize="medium" sx={{ color: 'white' }} />
						</div>
						<div className="col-1 d-flex align-items-center justify-content-end p-0">
							<AccountCircleIcon
								onClick={() => navigate('/user')}
								fontSize="medium"
								sx={{ color: 'white', '&:hover': { cursor: 'pointer' } }}
								className="me-2"
							/>
							<ExitToAppIcon
								onClick={onLogout}
								fontSize="medium"
								sx={{ color: 'red', '&:hover': { cursor: 'pointer' } }}
							/>
						</div>
					</div>
				</div>
			</nav>

			{/* Drawer */}
			<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
				<Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Typography className="color-oficial ff-anton fs-3 me-2" to={'/home'}>
						MOVIES APP
					</Typography>
					<LiveTvIcon fontSize="medium" sx={{ color: '#001db5' }} />
				</Box>
				{
					user.admin
						? (<Link className="btn btn-primary my-3" to={'/admin/movies'}>Admin Movies</Link>)
						: ''
				}
				<Box sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<SearchIcon className='me-2' fontSize="medium" sx={{ color: '#001db5' }} />
					<input
						type="text"
						className="form-control w-50 me-2"
						placeholder="Search movie ..."
						value={search}
						onChange={(e) => { setSearch(e.target.value) }}
					/>
					<Button onClick={() => {
						navigate(`/movies?q=${encodeURIComponent(search)}`);
						setOpen(false);
					}}
						variant="contained"
					>
						Search
					</Button>
				</Box>
				<List sx={{ width: 250 }}>
					<ListItem component={Button} onClick={() => handleNavigation('/home')}>
						<ListItemText primary="Inicio" />
					</ListItem>
					<ListItem component={Button} onClick={() => handleNavigation('/user')}>
						<ListItemText primary="Mi Perfil" />
					</ListItem>
					<ListItem component={Button} onClick={onLogout}>
						<ListItemText primary="Cerrar sesión" sx={{ color: 'red' }} />
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};

export default Navbar;
