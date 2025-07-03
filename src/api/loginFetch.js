const API_URL = import.meta.env.VITE_API_URL;
export const loginFetch = async (data) => {
	const url = `${API_URL}/auth/login`;

	console.log(API_URL);

	const params = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	const response = await fetch(url, params);
	const result = await response.json();

	if (response.status !== 200) throw result;

	return result;
};
