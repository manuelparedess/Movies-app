const API_URL = import.meta.env.API_URL;
export const deleteMovie = async (id) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${API_URL}/movie/` + id, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        }
    });
    const result = await  response.json();

	if (response.status !== 200) throw result;

	return result;

}