export const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await  response.json();

    if(response.status != 200) throw data;

    return data;

}