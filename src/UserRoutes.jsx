import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import Loader from "shared/components/Loader/Loader";

const MoviesPage = lazy(()=> import('pages/MoviesPage/MoviesPage'));
const  HomePage = lazy(()=> import('pages/HomePage/HomePage'));
const MovieInfoPage = lazy(()=>import('pages/MovieInfoPage/MovieInfoPage'));
const MovieInfoCast = lazy(()=>import('pages/MovieInfoCast/MovieInfoCast'));
const MovieInfoReviews = lazy(() =>import('pages/MovieInfoReviews/MovieInfoReviews'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieInfoPage />}>
          <Route path="cast" element={<MovieInfoCast />} />
          <Route path="reviews" element={<MovieInfoReviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default UserRoutes;
