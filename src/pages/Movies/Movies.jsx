import { MoviesList } from "components/MoviesList/MoviesList";
import { Section } from "components/Section/Section";
import { SearchForm } from "components/SearchForm/SearchForm";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchByQuery } from "Services/fetch";

const Movies = () =>{
  const [searchParams, setSearchParams]= useSearchParams();
  const [movies, setMovies] = useState(null)
  const query = searchParams.get('query');

  const handleSubmit = (value) =>{
    setSearchParams({query: value.trim()})
  }

  useEffect(() =>{
    if(query){
      getSearchByQuery(query)
      .then(res => setMovies(res.results))
    }
  }, [query])

  return(
    <Section>
      <h2>Search Films</h2>
      <SearchForm onSubmit={handleSubmit}/>
      <MoviesList movies={movies}/>
    </Section>
  )
}

export default Movies;