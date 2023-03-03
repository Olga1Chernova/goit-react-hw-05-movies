import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieSearchForm from './MovieSearchForm/MovieSearchForm';
import MovieList from 'shared/components/MovieList/MovieList';

import Loader from 'shared/components/Loader/Loader';

import { searchMovies } from '../../shared/services/movies-api';

const MovieSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  
  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(search, page);
        setItems(prevItems => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [search, setLoading, setItems, setError, page]);

  const FindMovies = useCallback(({ search }) => {
    setSearchParams({ search, page: 1 });
    setItems([]);
  }, [setSearchParams, setItems]);



  return (
    <>
      <MovieSearchForm onSubmit={FindMovies} />
      <MovieList items={items}/>
      {error && <p>{error}</p>}
      {loading && <Loader/>}
    </>
  );
};

export default MovieSearch;
