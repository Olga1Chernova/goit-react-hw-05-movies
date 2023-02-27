import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'cf961b1b89f4c4a28558be2b04fdd59a',
    }
}) //params for all project
export const trendingMovies = async () => {
    const { data } = await instance.get(
        `/trending/movie/day`);
    return data;
}