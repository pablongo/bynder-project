import React from 'react';
import { PropTypes } from 'prop-types';
import CharacterCard from '../CharacterCard/CharacterCard';

export default function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((character) => <CharacterCard character={character} key={character.name} />)}
    </ul>
  );
}

CharacterList.defaultProps = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ),
};
