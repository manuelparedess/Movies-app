const API_URL = import.meta.env.API_URL;
export const getMovieByName = async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q');

    const response = await fetch(`${API_URL}/movies/search?q=` + q);
    const data = await  response.json();

    if(response.status != 200) throw { movies: data };

    return { movies: data };

}