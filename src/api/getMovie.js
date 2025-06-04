export const getMovie = async ({ params }) => {
    const response = await fetch('https://server-movies-app.onrender.com/api/movie/' + params.id);
    const data = await  response.json();

    if(response.status != 200) throw { movie: data };

    return { movie: data };

}