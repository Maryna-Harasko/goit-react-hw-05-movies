import React from "react";
import { MoviesItem } from "components/MoviesItem/MoviesItem";
import PropTypes from 'prop-types';
import { ListMovies } from "./MoviesList.styled";

export const MoviesList = ({movies}) =>{
  return(
    <ListMovies>
      {movies && movies.map(movie =>(
        <MoviesItem key = {movie.id} {...movie}/>
      ))}
    </ListMovies>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};