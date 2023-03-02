import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { movieCast } from 'shared/services/movies-api';

import css from './movie-info-cast.module.scss';

const MovieInfoCast = () => {
    const [cast, setCast] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const data = await movieCast(id);
                setCast(data.cast);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }
        fetchCast();
    }, [id])


    const elements = cast.map(
      ({ id, character, original_name, profile_path }) => (
        <li key={id}>
          <img
            className={css.img}
            src={
              profile_path === null
                ? 'https://www.pngitem.com/pimgs/m/287-2876223_no-profile-picture-available-hd-png-download.png'
                : `https://image.tmdb.org/t/p/w500${profile_path}`
            }
            alt="cast"
          />
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>
      )
    );

    return (
      <div className={css.wrapper}>
        <ul className={css.list}>{elements}</ul>
      </div>
    );
}

export default MovieInfoCast;