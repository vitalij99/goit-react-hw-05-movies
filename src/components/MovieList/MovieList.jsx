import React from 'react';

const MovieList = ({ movieList }) => {
  return <ul>{movieList.map(createMovie)}</ul>;
};

function createMovie({ id, original_title }) {
  return (
    <li key={id}>
      <p>{original_title}</p>
    </li>
  );
}
export default MovieList;
