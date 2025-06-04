export const getMovieByName = async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q');

    const response = await fetch('https://server-movies-app.onrender.com/api/movies/search?q=' + q);
    const data = await  response.json();

    if(response.status != 200) throw { movies: data };

    return { movies: data };

}