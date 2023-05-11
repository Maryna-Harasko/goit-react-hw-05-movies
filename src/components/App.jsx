import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import styled from "styled-components";
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound'));

export const ContainerDetails = styled.div`
  min-height: 100vh;
  background: rgb(215,11,11);
  background: linear-gradient(22deg, rgba(215,11,11,1) 0%, rgba(40,86,171,0.9626444327731093) 48%, rgba(29,1,37,0.8954175420168067) 100%);
`
const App = () => {
  return (
  <ContainerDetails>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>  
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </ContainerDetails> 
  );
};

export default App;