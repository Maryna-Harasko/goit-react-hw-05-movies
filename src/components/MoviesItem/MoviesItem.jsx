import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const MoviesItem = ({ id, title, poster_path}) =>{
  const location = useLocation();
  const currentPage = location.pathname === '/' ? '/movies' : location.pathname;

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/'
  return(
    <li>
      <NavLink to={`${currentPage}/${id}`} state={{from: location}}>
        <img src={IMAGES_BASE_URL + poster_path} alt={title} />
        <h2>{title}</h2>
      </NavLink>
    </li>
  )
}

MoviesItem.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  id: PropTypes.number.isRequired,
};