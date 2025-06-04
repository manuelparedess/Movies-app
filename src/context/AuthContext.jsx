import { useState, createContext, useEffect } from 'react';
import { getMeFetch } from '../api/getMeFetch';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	//relogin
	useEffect(() => {
		//Hago una funcion IFE para que sea asincrono
		(async () => {
			const token = localStorage.getItem('token');
			await login(token);
			setLoading(false);
		})()

	}, [])

	//login
	const login = async (token) => {

		try {
			const user = await getMeFetch(token)
			delete user.password;
			setUser(user);
			
		} catch (error) {
			setUser(null);
		}
	}

	//logout
	const logout = () => {
		setUser(null);
		localStorage.clear();
	}

	// los datos para utilizar en todo el sitio web
	const data = {
		user,
		setUser,
		login,
		logout
	};

	if(loading) return (
		<div className="all-viewport d-flex justify-content-center align-items-center">
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);

	// el contexto
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
