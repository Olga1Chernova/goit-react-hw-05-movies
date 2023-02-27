import { useState, useEffect } from 'react';

import { trendingMovies } from '../../shared/services/movies-api.js';

import TrendingMoviesList from './TrendingMoviesList/TrendingMoviesList.jsx';
import Loader from 'shared/components/Loader/Loader.jsx';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //console.log(postDetails);
  //componentDidUpdate()
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await trendingMovies();
        //console.log(data);
        setItems(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setError, setItems, setLoading]);

  return (
    <>
      {error && <p>Oops. Something went wrong :( </p>}
      {loading && <Loader />}
          <TrendingMoviesList items={items} />
    </>
  );
};

export default Movies;
