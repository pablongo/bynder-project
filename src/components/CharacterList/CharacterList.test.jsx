import React from 'react';
import { render, screen } from '../../utils/test.utils';

import CharacterList from './CharacterList';

describe('Given a CharacterList component', () => {
  describe('When it renders', () => {
    beforeEach(() => {
      const characters = [{
        name: 'Anakin',
      }];
      render(<CharacterList characters={characters} />);
    });
    test('Then character-list should be in the document', () => {
      expect(screen.getByTestId('character-list')).toBeInTheDocument();
    });
  });
});
