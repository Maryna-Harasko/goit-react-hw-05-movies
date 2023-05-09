import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import NotFound from "pages/NotFound";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { getMoviesReviews } from "Services/fetch";


const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/moviesDetails" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>  
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div> 
  );
};

export default App;