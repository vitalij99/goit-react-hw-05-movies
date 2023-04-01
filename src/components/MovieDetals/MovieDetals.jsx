import { fetchMovie } from 'api/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import style from './MovieDetals.module.scss';
import BtnBack from 'components/BtnBack/BtnBack';
import { Loader } from 'components/Loader/Loader';

const MovieDetals = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    fetchMovie(`movie/${movieId}`)
      .then(data => {
        setMovie(data);
        setShowLoading(false);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) {
    return <>{showLoading && <Loader />}</>;
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

  const userScore = vote_average.toFixed(1);
  return (
    <>
      <BtnBack />
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

          <p className={style.score}>User Score: {userScore}/10</p>

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
