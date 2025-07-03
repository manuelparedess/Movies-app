const API_URL = import.meta.env.VITE_API_URL;
export const registerFetch = async (data) => {
	const url =	`${API_URL}/auth/register`;

	const params = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	const response = await fetch(url, params);
	const result = await response.json();

	if (response.status !== 201) throw result;

	return result;
};
