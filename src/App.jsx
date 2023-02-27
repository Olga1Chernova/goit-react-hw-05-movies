import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from 'modules/Navbar/Navbar';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import HomePage from 'pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
