import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';

export default function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <Link to={`/details/${character.name}`}>
          <CharacterCard character={character} key={character.name} />
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
