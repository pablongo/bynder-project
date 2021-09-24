import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadSearchedCharacters } from '../../redux/actions/actionCreators';

export default function SearchFilters() {
  const dispatch = useDispatch();

  const [inputValue, setInPutValue] = useState('');

  function handleInputChange({ target: { value } }) {
    setInPutValue(value);
  }

  function handleSearch(searchValue) {
    dispatch(loadSearchedCharacters(searchValue));
  }

  return (
    <>
      <h1>Search filters</h1>
      <form>
        <input type="text" placeholder="Search Character" onChange={handleInputChange} />
        <button type="button" onClick={() => handleSearch(inputValue)}>
          Search
        </button>
      </form>
    </>
  );
}
