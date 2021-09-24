import React from 'react';
import { PropTypes } from 'prop-types';

import './CharacterCard.css';

export default function CharacterCard({ character }) {
  return (
    <li className="character-card">
      <h2>{character.name}</h2>
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
