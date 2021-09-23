import React from 'react';
import { useSelector } from 'react-redux';

import CharacterList from '../../components/CharacterList/CharacterList';

export default function Dashboard() {
  const characters = useSelector((store) => store.characters);

  return (
    <>
      <h1>This is a Dashboard</h1>
      <CharacterList characters={characters} />
    </>
  );
}
