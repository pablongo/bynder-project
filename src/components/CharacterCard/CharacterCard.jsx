import React from 'react';
import { PropTypes } from 'prop-types';

export default function CharacterCard({ character }) {
  return (
    <li>
      <h2>{character.name}</h2>
      <span>
        Birth year:
        {' '}
        {character.birth_year}
      </span>
    </li>
  );
}

CharacterCard.defaultProps = {
  character: PropTypes.shape({}).isRequired,
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    birth_year: PropTypes.string,
  }),
};
