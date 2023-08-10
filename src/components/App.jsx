import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPages';
import { NotFound } from './NotFound';
import { Header } from './Header';
import { Footer } from './Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/*<Route path="/movies/:movieId" element={<MovieDetails />} />*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
