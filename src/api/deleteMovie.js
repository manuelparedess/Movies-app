export const deleteMovie = async (id) => {

    const token = localStorage.getItem('token');

    const response = await fetch('https://server-movies-app.onrender.com/api/movie/' + id, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        }
    });
    const result = await  response.json();

	if (response.status !== 200) throw result;

	return result;

}