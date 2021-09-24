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
    <div className="dashboard-container">
      <SearchFilters />
      <PaginationButtons previous={previousPage} next={nextPage} />
      <CharacterList characters={charactersList} />
    </div>
  );
}
