import { useState, useEffect, useCallback } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';

import { getMovieInfoById } from '../../shared/services/movies-api';

import css from './movie-info-page.module.scss';

const MovieInfoPage = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate(); //changes url
  const goBack = useCallback(() => navigate(-1), [navigate]);
  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const result = await getMovieInfoById(id);
        setMovie(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovieInfo();
  }, [id]);

  if (movie.genres === undefined) {
    return "There are no genres for this movie";
    }
    

    //const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const genre = movie.genres.map(genre => genre.name).join(', ');
    const poster =
    movie.poster_path === null
      ? 'https://seekersguidance.org/wp-content/uploads/2022/10/Movie-Theatre-Film-Cinema.jpg'
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;  
    
  return (
    <>
      <button className={css.button} onClick={goBack}> &#8592;  Go back</button>
      <div className={css.mainWrapper}>
        <div className={css.imgWrapper}>
          <img className={css.poster} src={poster} alt="movie information" />
        </div>
        <div className={css.textWrapper}>
          <h1>{movie.title}</h1>
          <h2 className={css.title}>User score</h2>
          <p className={css.vote}>{movie.vote_average.toFixed(1)}</p>
          <h2 className={css.title}>Overview</h2>
          <p> {movie.overview}</p>
          <h2 className={css.title}>Genres</h2>
          <p>{genre}</p>
        </div>
      </div>
      <Link className={css.cast} to={'cast'}>Cast</Link>
      <Outlet />
    </>
  );
};

export default MovieInfoPage;
