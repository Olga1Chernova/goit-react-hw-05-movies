import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './movie-list.module.scss';

const MovieList = ({ items }) => {
    const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <Link
      className={css.link}
      key={id}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li key={id} className={css.item}>
        {title}
      </li>
    </Link>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default memo(MovieList);

MovieList.defaultProps = {
  items: [],
};
