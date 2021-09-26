import React from 'react';
import { useParams } from 'react-router';
import { render, screen, fireEvent } from '../../utils/test.utils';

import CharacterDetails from './CharacterDetails';

import preloadedState from '../../mock/preloadedState.mock';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: jest.fn(),
}));

describe('Given a CharacterDetails component', () => {
  describe('When it renders', () => {
    beforeEach(() => {
      useParams.mockReturnValue({ source: 'dashboard', character: '' });
      render(<CharacterDetails />, { preloadedState });
    });
    test('Then details-article should be in the document', () => {

    });
  });
});
