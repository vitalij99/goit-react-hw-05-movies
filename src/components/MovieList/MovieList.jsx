import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './MovieList.module.scss';

const MovieList = ({ movieList }) => {
  const location = useLocation();
  return <ul className={style.list}>{movieList.map(createMovie)}</ul>;

  function createMovie({ id, original_title }) {
    return (
      <li key={id} className={style.item}>
        <Link to={`/movies/${id}`} state={location} className={style.link}>
          {original_title}
        </Link>
      </li>
    );
  }
};

export default MovieList;
