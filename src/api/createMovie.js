const API_URL = import.meta.env.VITE_API_URL;

export const createMovie = async (data) => {
	const url = `${API_URL}/movie`;

    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('releaseYear', data.releaseYear);
    formData.append('genre', data.genre);
    formData.append('director', data.director);
    formData.append('description', data.description);
    formData.append('rating', data.rating);
    data.actors.forEach((actor) => {
        formData.append('actors', actor); 
    });
    if (data.image) {
        formData.append('image', data.image);
    }

    const token = localStorage.getItem('token');

	const params = {
		method: 'POST',
        headers: {
            'Authorization': token,
        },
		body: formData,
	};

	const response = await fetch(url, params);
	const result = await response.json();

	if (response.status !== 201) throw result;

	return result;
};