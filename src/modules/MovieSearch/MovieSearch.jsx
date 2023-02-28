import { useState, useEffect, useCallback } from 'react';

import MovieSearchForm from './MovieSearchForm/MovieSearchForm';
import MovieSearchList from './MovieSearchList/MovieSearchList';

import Loader from 'shared/components/Loader/Loader';

import { searchMovies } from '../../shared/services/posts-api';

const MovieSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  
  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(search);
        setItems(prevItems => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [search, setLoading, setItems, setError]);

  const FindMovies = useCallback(({ search }) => {
    setSearch({ search });
    setItems([]);
  }, [setSearch, setItems]);



  return (
    <>
      <MovieSearchForm onSubmit={FindMovies} />
      <MovieSearchList items={items}/>
      {error && <p>{error}</p>}
      {loading && <Loader/>}
    </>
  );
};

export default MovieSearch;
