import { memo } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

import css from './movie-search-form.module.scss';
import initialState from './initialState';
import useForm from '../../../shared/hooks/useForm';

const MovieSearchForm = ({ onSubmit }) => {
  //use custom form hook
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { search } = state;

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css['SearchForm-button']}>
          <span className={css['SearchForm-button-label']}>Search</span>
          <span>
            <FcSearch className={css.icon} />
          </span>
        </button>

        <input
          className={css['SearchForm-input']}
          name="search"
          value={search}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          required
        />
      </form>
    </header>
  );
};

export default memo(MovieSearchForm);

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
