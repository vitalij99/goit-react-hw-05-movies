import Home from 'pages/Home';
import Layaout from 'pages/layaout';
import Movies from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </>
  );
};
