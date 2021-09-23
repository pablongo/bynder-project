import React from 'react';
import { useSelector } from 'react-redux';

import SearchFilters from '../../components/SearchFilters/SearchFilters';
import CharacterList from '../../components/CharacterList/CharacterList';

export default function Dashboard() {
  const characters = useSelector((store) => store.characters.results);

  return (
    <>
      <h1>This is a Dashboard</h1>
      <SearchFilters />
      <CharacterList characters={characters} />
    </>
  );
}
