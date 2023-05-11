import React from "react";
import { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { SearchFormEl, SearchButtonLabel, SearchButton, SearchInput, ContainerForm } from "./SearchForm.styled";

export const SearchForm = ({onSubmit}) => {
  const [searchText, setSearchText] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchText);
    setSearchText('')
  }

  return(
    <ContainerForm >
      <SearchFormEl onSubmit={formSubmit}>
        <SearchButton type="submit">
          <FiSearch style={{ width: 20, height: 20 }} />
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton> 
         <SearchInput
          value={searchText}
          onChange={(event)=>setSearchText(event.target.value)}
          type='text'
          placeholder='Enter name of movie...'
        />
      </SearchFormEl>
    </ContainerForm >
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};