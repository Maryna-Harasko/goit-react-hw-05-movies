import axios from "axios";

const API_KEY = '89cdef6951461333339e0f595b8c2655';

const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () =>{
  const { data } = await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  return data;
}

export const getSearchByQuery = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
  return data;
}

export const getMoviesByID = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return data;
}

export const getMoviesCast = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return data;
}

export const getMoviesReviews = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return data;
}