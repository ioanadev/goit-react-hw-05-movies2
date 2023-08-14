import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

//import { HomePage } from 'pages/HomePage';
//import { MoviesPage } from 'pages/MoviesPages';
//import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { NotFound } from './NotFound';
import { Header } from './Header';
import { Footer } from './Footer';
//import { Cast } from './Cast';
//import { Reviews } from './Reviews';
import { Loading } from './Loading';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPages'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};
