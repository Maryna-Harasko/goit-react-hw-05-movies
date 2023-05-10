import React from "react";
import { useState } from "react";
// import { FiSearch } from 'react-icons/fi';

export const SearchForm = ({onSubmit}) => {
  const [searchText, setSearchText] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchText);
    setSearchText('')
  }

  return(
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <input
            value={searchText}
            onChange={(event)=>setSearchText(event.target.value)}
            type='text'
            placeholder='Enter name of movie...'
          />
        </div>

        <button type='submit' >
          Search
        </button>
      </form>
    </div>
    // <SearchForm>
    //   <SearchButton type="submit">
    //   <FiSearch style={{ width: 20, height: 20 }} />
    //   <SearchButtonLabel>Search</SearchButtonLabel>
    //   </SearchButton>
    //   <SearchInput
    //     className="input"
    //     type="text"
    //     autocomplete="off"
    //     autoFocus
    //     placeholder="Search images and photos"
    //     value = { query }
    //     onChange = {handelQueryChange}
    //   />
    // </SearchForm>
  )
}