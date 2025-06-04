
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import { AuthProvider } from './context/AuthContext.jsx';
import { MovieProvider } from './context/MovieContext.jsx';

createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<MovieProvider>
			<RouterProvider router={router} />
		</MovieProvider>
	</AuthProvider>
);
