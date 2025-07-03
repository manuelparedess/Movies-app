const API_URL = import.meta.env.VITE_API_URL;
export const getMeFetch = async (token) => {
	const url = `${API_URL}/user/me`;

	const params = {
		method: 'GET',
		headers: {
			Authorization: token,
		}
	};

	const response = await fetch(url, params);
	const result = await response.json();

	if (response.status !== 200) throw result;

	return result;
};
