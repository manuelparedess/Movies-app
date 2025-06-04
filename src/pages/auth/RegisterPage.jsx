import { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerFetch } from '../../api/registerFetch';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Button } from '@mui/material';

const RegisterPage = () => {

    /* 
	datos del formulario
   */
	const [formData, setFormData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
	});

	/* 
	validacion de formulario
   */
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	/* 
	obtener los datos del formulario de registro
   */
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		setSuccess(false);

		try {
			const res = await registerFetch(formData);
			setSuccess(res.msg);
			setError(false);
		} catch (error) {
			setError(error.msg);
			setSuccess(false);
		}
	};

    return (
        <div className="all-viewport d-flex justify-content-center align-items-center">
            <form className='bg-oficial form-page d-flex flex-column shadow p-5' onSubmit={handleSubmit}>
                <div className='d-flex mb-2'>
					<h2 className='text-light ff-anton me-2'>MOVIES APP</h2>
					<LiveTvIcon fontSize="large" sx={{ color: 'white' }} />
				</div>
                <h1 className='text-light'>Register</h1>
                <div className="d-flex mb-3">
                    <div className="w-50 me-1">
                        <label className="form-label text-light">Name</label>
                        <input 
                            type="text" 
                            name="firstname"
                            className="form-control"
							value={formData.firstname}
							onChange={handleInputChange}  
                        />
                    </div>
                    <div className="w-50 ms-2">
                        <label className="form-label text-light">Lastname</label>
                        <input 
                            type="text" 
                            name="lastname"
                            className="form-control"
							value={formData.lastname}
							onChange={handleInputChange} 
                        />
                    </div>
                </div>
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
				<Button type='submit' className='mb-3' variant="contained">Sign up</Button>
				{success 
					? <p className="alert alert-success mt-2">{success} <Link className='text-underline-none' to="/login">Log in</Link></p>
					: <p className='text-light fs-5'>Have an account? <Link to="/login">Log in now</Link></p>
				}
            </form>
        </div>
    )
}

export default RegisterPage


