import React, { useEffect, useState } from "react";
import { Section } from "components/Section/Section";
import { getTrendingMovies } from "Services/fetch";
import { MoviesList } from "components/MoviesList/MoviesList";


const Home = () =>{

  const [movies, setMovies] = useState(null);

  useEffect(()=>{
    getTrendingMovies()
    .then(response => {
      setMovies(response.results);
    })
    .catch(error => console.error(error.message));
  },[])

  console.log(movies);
  return(
    <Section>
      <h1>Trending movies today</h1>
      <MoviesList movies ={movies}/>
    </Section>
  )
}

export default Home;