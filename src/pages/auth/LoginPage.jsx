import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginFetch } from '../../api/loginFetch.js';
import { AuthContext } from '../../context/AuthContext';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Button } from '@mui/material';


const LoginPage = () => {

    const navigate = useNavigate();
	const { login } = useContext(AuthContext);
	/* 
	datos del formulario
   */
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	/* 
	validacion de formulario y navegacion entre las rutas
   */
	const [error, setError] = useState(null);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	/* 
	obtener los datos del formulario de login
   */
	const handleSubmit = async (e) => {
		e.preventDefault();
        setError(false);

		try {
			const { token } = await loginFetch(formData);
			localStorage.setItem('token', token);

			await login(token);

			// mensaje de error
			setError(false);
			navigate('/home');
		} catch (err) {
			// mensaje de error
			setError(err.msg);
		}
	};

    return (
        <div className="all-viewport d-flex justify-content-center align-items-center">
            <form className='bg-oficial form-page d-flex flex-column shadow p-5' onSubmit={handleSubmit}>
                <div className='d-flex mb-2'>
					<h2 className='text-light ff-anton me-2'>MOVIES APP</h2>
					<LiveTvIcon fontSize="large" sx={{ color: 'white' }} />
				</div>
                <h1 className='text-light'>Sign in</h1>
                <div className="mb-3">
                    <label className="form-label text-light">Email</label>
                    <input 
                        type="text" 
                        name="email"
                        className="form-control" 
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-light">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleInputChange} 
                    />
                </div>
                {error && <p className="alert alert-danger">{error}</p>}
				<Button type='submit' className='mb-3' variant="contained">Login</Button>
                <p className='text-light fs-5'>
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </p>
            </form>
        </div>
    )
}

export default LoginPage





