import { memo } from 'react';
import { Link } from 'react-router-dom';

import css from './movie-search-list.module.scss';

const MovieSearchList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <Link className={css.link} key={id} to={`/movies/${id}`}>
      <li key={id}>{title}</li>
    </Link>
  ));

  return <ul>{elements}</ul>;
};

export default memo(MovieSearchList);

MovieSearchList.defaultProps = {
  items: [],
};
