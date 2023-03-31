import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from './Cast.module.scss';
import { fetchMovie } from 'api/api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie(`movie/${movieId}/credits`)
      .then(data => setCast(data.cast))
      .catch(console.log);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.slice(0, 19).map(({ id, name, character, profile_path }) => (
            <li key={id} className={style.item}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  className={style.img}
                  width="100"
                />
              ) : (
                <div className={style.imgNotFound}>Image not found</div>
              )}
              <div>
                <p>
                  <b>{name}</b>
                </p>
                <p>
                  Character: <b>{character}</b>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No casts</div>
      )}
    </>
  );
};

export default Cast;
