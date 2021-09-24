import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadSearchedCharacters } from '../../redux/actions/actionCreators';

export default function SearchFilters() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const changeEventMap = {
    search_term: setSearchTerm,
    filterBy: setFilterBy,
  };

  function handleInputChange({ target: { name, value } }) {
    changeEventMap[name](value);
  }

  function handleSearch(search, filter) {
    dispatch(loadSearchedCharacters(search, filter));
  }

  return (
    <>
      <h1>Search filters</h1>
      <form>
        <input
          name="search_term"
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <fieldset>
          <label htmlFor="search_people">
            <input
              id="search_people"
              type="radio"
              name="filterBy"
              value="people"
              onChange={handleInputChange}
            />
            by character name
          </label>
          <label htmlFor="planet_resident">
            <input
              id="planet_resident"
              type="radio"
              name="filterBy"
              value="planets"
              onChange={handleInputChange}
            />
            by hometown planet
          </label>
        </fieldset>
        <button type="button" onClick={() => handleSearch(searchTerm, filterBy)}>
          Search
        </button>
      </form>
    </>
  );
}
