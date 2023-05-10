import axios from "axios";

const API_KEY = '89cdef6951461333339e0f595b8c2655';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () =>{
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
}

export const getSearchByQuery = async (query) => {
  const { data } = await axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
  return data;
}

export const getMoviesByID = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return data;
}

export const getMoviesCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return data;
}

export const getMoviesReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return data;
}