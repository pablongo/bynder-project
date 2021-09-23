import React from 'react';
import { Proptypes } from 'prop-types';

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
  character: Proptypes.shape({}).isRequired,
};

CharacterCard.propTypes = {
  character: Proptypes.shape({}),
};
