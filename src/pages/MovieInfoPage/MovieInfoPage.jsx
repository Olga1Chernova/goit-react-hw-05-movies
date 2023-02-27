import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieInfoById } from '../../shared/services/movies-api';

const MovieInfoPage = () => {
    const [movie, setMovie] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchMovieInfo = async() => {
            try {
                const result = await getMovieInfoById(id);
                setMovie(result);
            }
            catch ({ response }) {
                console.log(response.data.status_message)
            }
        };
        fetchMovieInfo(id);
    },[id])

    return (
        <div>
            <img src={movie.poster_path} alt="movie information"/>
            <h1>{movie.title}</h1>
            <h2>User score</h2>
            <p>{movie.vote_average}</p>
            <h2>Overview</h2>
            <p> {movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres}</p>
      </div>
    );
}

export default MovieInfoPage;