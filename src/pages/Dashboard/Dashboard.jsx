import React from 'react';
import { useSelector } from 'react-redux';

import SearchFilters from '../../components/SearchFilters/SearchFilters';
import CharacterList from '../../components/CharacterList/CharacterList';
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons';

import './Dashboard.css';

export default function Dashboard() {
  const [previousPage, nextPage, charactersList] = useSelector(
    ({ characters: { previous, next, results } }) => [previous, next, results],
  );

  return (
    <div data-testid="dashboard" className="dashboard-container">
      <section className="dashboard-container__welcome welcome">
        <article className="welcome__titles titles">
          <span className="titles__date">WEDNESDAY 29th</span>
          <h2 className="titles__up">THE RISE OF </h2>
          <h2 className="titles__down">BYNDERS JEDI</h2>
          <a href="#character-list">
            <button
              type="button"
              className="titles__button"
            >
              THIS IS THE WAY
            </button>
          </a>
        </article>
      </section>
      <section className="dashboard-container__main main" id="character-list">
        <SearchFilters />
        <CharacterList characters={charactersList} />
        <PaginationButtons previous={previousPage} next={nextPage} />
      </section>
    </div>
  );
}
