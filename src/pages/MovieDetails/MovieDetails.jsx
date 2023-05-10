import React, { Suspense, useEffect, useState } from "react";
import { Outlet, NavLink, useParams, useLocation, useNavigate } from "react-router-dom";
import { Section } from "components/Section/Section";
import { MoviesInfo } from "components/MoviesInfo/MoviesInfo";
import { BackBtn } from "components/BackBtn/BackBtn";
import { getMoviesByID } from "Services/fetch"; 
import { Loader } from "components/Loader/Loader";

const MovieDetails = () =>{
  const {movieId} = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const location = useLocation();
  const path = location?.state?.from ?? '/';
  const navigate = useNavigate();
 
  useEffect(() =>{
    setLoading(true);
    getMoviesByID(movieId)
      .then((res) =>{setMovieInfo(res);
      setSuccess(true);
    })
      .catch(error => navigate('/', {replace: true}))
      .finally(() => setLoading(false))
  },[movieId, navigate])

  return(
    <Section>
      <BackBtn path={path}/>
      {isLoading ? (<Loader/>
      ) : (
        <div>
          { isSuccess && 
          <>
          <MoviesInfo {...movieInfo}/>
          <ul>
            <li>
              <NavLink to="cast">Read about actors</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews about movies</NavLink>
            </li>
          </ul>
          </>
          }
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </Section>
  )
}

export default MovieDetails;
