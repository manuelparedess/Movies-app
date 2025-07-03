const API_URL = import.meta.env.API_URL;
export const getMovie = async ({ params }) => {
    const response = await fetch(`${API_URL}/movie/` + params.id);
    const data = await  response.json();

    if(response.status != 200) throw { movie: data };

    return { movie: data };

}