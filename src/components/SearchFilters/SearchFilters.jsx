import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadSearchedCharacters } from '../../redux/actions/actionCreators';

import './SearchFilters.css';

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
    <form data-testid="search-form" className="form">
      <fieldset className="form__radios radios">
        <label className="radios__input" htmlFor="search_people">
          <input
            id="search_people"
            type="radio"
            name="filterBy"
            value="people"
            onChange={handleInputChange}
          />
          FIND CHARACTERS
        </label>
        <label className="radios__input" htmlFor="planet_resident">
          <input
            id="planet_resident"
            type="radio"
            name="filterBy"
            value="planets"
            onChange={handleInputChange}
          />
          FIND PLANETS
        </label>
      </fieldset>
      <div className="input__container">
        <input
          className="form__input"
          name="search_term"
          type="text"
          disabled={!filterBy}
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <button
          data-testid="search-button"
          className="form__submit"
          type="button"
          onClick={() => handleSearch(searchTerm, filterBy)}
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}
