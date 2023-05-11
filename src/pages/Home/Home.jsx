import React, { useEffect, useState } from "react";
import { Section } from "components/Section/Section";
import { getTrendingMovies } from "Services/fetch";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";
import { Container } from "./Home.styled";


const Home = () =>{

  const [movies, setMovies] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    getTrendingMovies()
    .then(response => {
      setMovies(response.results);
    })
    .catch(error => console.error(error.message))
    .finally(() => setLoading(false));
  },[])

  console.log(movies);
  return(
    <Section>
      <Container>
        {isLoading && <Loader/>}
          <MoviesList movies ={movies}/>
      </Container>  
    </Section>
  )
}

export default Home;