import React from "react";
import { MoviesItem } from "components/MoviesItem/MoviesItem";
import PropTypes from 'prop-types';

export const MoviesList = ({movies}) =>{
  return(
    <ul>
      {movies && movies.map(movie =>(
        <MoviesItem key = {movie.id} {...movie}/>
      ))}
    </ul>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};