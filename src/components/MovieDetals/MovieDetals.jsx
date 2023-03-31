import { fetchMovie } from 'api/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import style from './MovieDetals.module.scss';

const MovieDetals = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMovie(`movie/${movieId}`)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    title,
    name,
    overview,
    genres,
    release_date,
    first_air_date,
    poster_path,
    vote_average,
  } = movie;

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      <Link to={location.state}>Back</Link>
      <div className={style.cardFilm}>
        {!poster_path ? (
          <div className={style.imgNot} />
        ) : (
          <img
            src={imgUrl}
            alt={title || name}
            width="200"
            className={style.img}
          />
        )}
        <div>
          <h2 className={style.title}>
            {title || name} ({(first_air_date || release_date).slice(0, 4)})
          </h2>

          <p className={style.score}>User Score: {vote_average}/10</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
        </div>
      </div>
      <div>
        <h2>Addititonal information</h2>
        <Link to="cast" className={style.cast}>
          Cast
        </Link>
        <Link to="reviews" className={style.reviews}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetals;
