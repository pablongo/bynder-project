import React from 'react';
import { useSelector } from 'react-redux';

import SearchFilters from '../../components/SearchFilters/SearchFilters';
import CharacterList from '../../components/CharacterList/CharacterList';
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons';

export default function Dashboard() {
  const [previousPage, nextPage, charactersList] = useSelector(
    ({ characters: { previous, next, results } }) => [previous, next, results],
  );

  return (
    <>
      <h1>This is a Dashboard</h1>
      <SearchFilters />
      <PaginationButtons previous={previousPage} next={nextPage} />
      <CharacterList characters={charactersList} />
    </>
  );
}
