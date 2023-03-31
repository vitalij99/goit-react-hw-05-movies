import axios from 'axios';

export const fetchMovie = async (path, query, page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
    method: 'get',
    params: {
      api_key: 'ab6bda3a1015f316f8a42c8865fe6267',
      query: query,
      page: page,
    },
  });

  return response.data;
};
