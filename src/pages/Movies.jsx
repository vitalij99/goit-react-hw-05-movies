import React from 'react';
import { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {
    console.log('first');
  }, []);

  return <div>Movies</div>;
};

export default Movies;
