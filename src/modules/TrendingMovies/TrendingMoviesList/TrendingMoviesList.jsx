import { memo } from 'react';
import { Link } from 'react-router-dom';

import css from './trending-movies-list.module.scss';

const TrendingMoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <Link className={css.link} key={id} to={`/movies/${id}`}>
      <li>
        <p>{title}</p>
      </li>
    </Link>
  ));

  return <ul>{elements}</ul>;
};

export default memo(TrendingMoviesList);

TrendingMoviesList.defaultProps = {
  items: [],
};
