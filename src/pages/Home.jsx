import { fetchMovie } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchMovie(`/trending/movie/day`)
      .then(data => {
        setMovies(data.results);
      })
      .catch(console.log);
  }, []);

  return <>{movies && <MovieList movieList={movies}></MovieList>}</>;
};

export default Home;
