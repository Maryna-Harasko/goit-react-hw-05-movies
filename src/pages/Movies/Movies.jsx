import { MoviesList } from "components/MoviesList/MoviesList";
import { Section } from "components/Section/Section";
import { SearchForm } from "components/SearchForm/SearchForm";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchByQuery } from "Services/fetch";
import { Loader } from "components/Loader/Loader";

const Movies = () =>{
  const [searchParams, setSearchParams]= useSearchParams();
  const [movies, setMovies] = useState(null)
  const query = searchParams.get('query');
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = (value) =>{
    setSearchParams({query: value.trim()})
  }

  useEffect(() =>{
    if(query){
      setLoading(true);
      getSearchByQuery(query)
      .then(res => setMovies(res.results))
      .catch(error => {console.error(error.message)})
      .finally(() => setLoading(false))
    }
  }, [query])

  return(
    <Section>
      <SearchForm onSubmit={handleSubmit}/>
      {isLoading ? (<Loader/>
      ) : (
        <MoviesList movies={movies}/>
      )}
    </Section>
  )
}

export default Movies;