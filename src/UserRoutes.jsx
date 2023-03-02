import { Routes, Route } from 'react-router-dom';

import MoviesPage from 'pages/MoviesPage/MoviesPage';
import HomePage from 'pages/HomePage/HomePage';
import MovieInfoPage from 'pages/MovieInfoPage/MovieInfoPage';
import MovieInfoCast from 'pages/MovieInfoCast/MovieInfoCast';
import MovieInfoReviews from 'pages/MovieInfoReviews/MovieInfoReviews';

const UserRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieInfoPage />}>
          <Route path="cast" element={<MovieInfoCast />} />
          <Route path="reviews" element={<MovieInfoReviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    );
}

export default UserRoutes;
