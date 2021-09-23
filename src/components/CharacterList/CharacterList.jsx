import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';

export default function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <Link key={character.name} to={`/details/${character.name}`}>
          <CharacterCard character={character} />
        </Link>
      ))}
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
