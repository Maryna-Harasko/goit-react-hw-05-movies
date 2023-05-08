import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const MovieDetails = () =>{
  return(
    <div>
    <h1>About page</h1>
    <ul>
      <li>
        <NavLink to="cast">Read about actors</NavLink>
      </li>
      <li>
        <NavLink to="reviews">Reviews about movies</NavLink>
      </li>
    </ul>
    <Outlet />
  </div>
  )
}

export default MovieDetails;