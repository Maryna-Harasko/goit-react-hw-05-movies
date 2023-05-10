import React from "react";
import { MoviesItem } from "components/MoviesItem/MoviesItem";

export const MoviesList = ({movies}) =>{
  return(
    <ul>
      {movies && movies.map(movie =>(
        <MoviesItem key = {movie.id} {...movie}/>
      ))}
    </ul>
  )
}