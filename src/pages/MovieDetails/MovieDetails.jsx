import React, { Suspense, useEffect, useState } from "react";
import { Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { Section } from "components/Section/Section";
import { MoviesInfo } from "components/MoviesInfo/MoviesInfo";
import { BackBtn } from "components/BackBtn/BackBtn";
import { getMoviesByID } from "Services/fetch"; 
import { Loader } from "components/Loader/Loader";
import { ContainerDetails, ListPage, InfoPageLink } from "./MovieDetails.styled";

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
      <ContainerDetails>
        <BackBtn path={path}/>
        {isLoading ? (<Loader/>
        ) : (
          <>
            { isSuccess && 
            <>
            <MoviesInfo {...movieInfo}/>
            <h3>Additional information</h3>
            <ListPage>
              <li>
                <InfoPageLink to="cast">Cast</InfoPageLink>
              </li>
              <li>
                <InfoPageLink to="reviews">Reviews</InfoPageLink>
              </li>
            </ListPage>
            </>
            }
            <Suspense fallback={<Loader/>}>
              <Outlet />
            </Suspense>
          </>
        )}
      </ContainerDetails>
    </Section>
  )
}

export default MovieDetails;
