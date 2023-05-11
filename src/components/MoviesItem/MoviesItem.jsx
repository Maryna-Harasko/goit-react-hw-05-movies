import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { ItemMovies, ImgPoster, Title } from "./MoviesItem.styled";

export const MoviesItem = ({ id, title, poster_path}) =>{
  const location = useLocation();
  const currentPage = location.pathname === '/' ? '/movies' : location.pathname;

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/'
  return(
    <ItemMovies>
      <NavLink to={`${currentPage}/${id}`} state={{from: location}}>
        <ImgPoster src={IMAGES_BASE_URL + poster_path} alt={title} width="320"/>
        <Title>{title}</Title>
      </NavLink>
    </ItemMovies>
  )
}

MoviesItem.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  id: PropTypes.number.isRequired,
};