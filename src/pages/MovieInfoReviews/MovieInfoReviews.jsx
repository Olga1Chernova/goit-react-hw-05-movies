import css from './movie-info-reviews.module.scss';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { movieReviews } from 'shared/services/movies-api';

const MovieInfoReviews = () => {

    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const data = await movieReviews(id);
          setReviews(data.results);
        } catch ({ response }) {
          console.log(response.data.message);
        }
      };
      fetchReviews();
    }, [id]);

    if (reviews.length === 0) {
        return  "There are no reviews yet!!!";
    }
    const elements = reviews.map(({ id, author, content }) => (
      <li key={id}>
        <p className={css.author}>Author: {author}</p>
        <p>{content}</p>
      </li>
    ));

     return (
       <div className={css.wrapper}>
         <ul className={css.list}>{elements}</ul>
       </div>
     );
}

export default MovieInfoReviews;