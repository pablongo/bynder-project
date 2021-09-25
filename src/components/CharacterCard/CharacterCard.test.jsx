import React from 'react';
import { render, screen } from '../../utils/test.utils';

import CharacterCard from './CharacterCard';

describe('Given a CharacterCar component', () => {
  describe('When it renders', () => {
    beforeEach(() => {
      const character = {
        name: 'Anakin',
        birth_year: 'ES24',
      };
      render(<CharacterCard character={character} />);
    });
    test('Then Anakin should be in the document', () => {
      expect(screen.getByText('Anakin')).toBeInTheDocument();
    });
  });
});
