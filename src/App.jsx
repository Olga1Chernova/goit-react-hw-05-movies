import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from 'modules/Navbar/Navbar';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import HomePage from 'pages/HomePage/HomePage';
import MovieInfoPage from 'pages/MovieInfoPage/MovieInfoPage';
import MovieInfoCast from 'pages/MovieInfoCast/MovieInfoCast';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieInfoPage />}>
          <Route path='cast' element={ <MovieInfoCast />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
