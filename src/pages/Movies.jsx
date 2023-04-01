import { fetchMovie } from 'api/api';
import FormSearch from 'components/FormSearch/FormSearch';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [totalMovie, setTotalMovie] = useState(1);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (!searchParams.get('query')) return;
    setShowLoading(true);
    setMovies(null);

    fetchMovie(`search/movie`, searchParams.get('query'))
      .then(data => {
        setMovies(data.results);
        setTotalMovie(data.total_results);
        setShowLoading(false);
      })
      .catch(console.log);
  }, [searchParams]);

  return (
    <>
      <FormSearch
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      {showLoading && <Loader />}
      {movies && movies.length !== 0 && <MovieList movieList={movies} />}
      {totalMovie === 0 && <div>Not found movies</div>}
    </>
  );
};

export default MoviesPages;
