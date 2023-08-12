import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPages';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { NotFound } from './NotFound';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
