import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Layaout from 'pages/layaout';

const MoviesPages = lazy(() => import('pages/Movies'));
const MovieDetals = lazy(() => import('./MovieDetals/MovieDetals'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesPages />} />
          <Route path="movies/:movieId" element={<MovieDetals />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
