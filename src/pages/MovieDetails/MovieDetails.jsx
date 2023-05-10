import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useParams, useLocation } from "react-router-dom";
import { Section } from "components/Section/Section";
import { MoviesInfo } from "components/MoviesInfo/MoviesInfo";
import { BackBtn } from "components/BackBtn/BackBtn";
import { getMoviesByID } from "Services/fetch"; 
import { Loader } from "components/Loader/Loader";

const MovieDetails = () =>{
  const {movieId} = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const location = useLocation();
  const path = location?.state?.from ?? '/';
 
  useEffect(() =>{
    setLoading(true);
    getMoviesByID(movieId)
      .then((res =>setMovieInfo(res)))
      .catch(error => {console.error(error.message)})
      .finally(setLoading(false))
  },[movieId])

  return(
    <Section>
      <BackBtn path={path}/>
      {isLoading && <Loader/> }
      {movieInfo && <MoviesInfo {...movieInfo}/>}
      <ul>
        <li>
          <NavLink to="cast">Read about actors</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews about movies</NavLink>
        </li>
      </ul>
      <Outlet />
    </Section>
  )
}

export default MovieDetails;