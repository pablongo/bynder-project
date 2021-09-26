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
    describe('And source is dashboard', () => {
      describe('And foundCharacter is a character', () => {
        beforeEach(() => {
          useParams.mockReturnValue({ source: 'dashboard', character: 'Luke Skywalker' });
          render(<CharacterDetails />, { preloadedState });
        });
        test('Then character-details should be in the document', () => {
          expect(screen.getByTestId('character-details')).toBeInTheDocument();
        });
      });
      describe('And foundCharacter is a planet', () => {
        beforeEach(() => {
          useParams.mockReturnValue({ source: 'dashboard', character: 'Tatooine' });
          render(<CharacterDetails />, { preloadedState });
        });
        test('Then character-details should NOT be in the document', () => {
          expect(screen.queryByTestId('character-details')).toBeNull();
        });
      });
    });
    describe('And source is planet', () => {
      describe('And foundCharacter is a character', () => {
        beforeEach(() => {
          useParams.mockReturnValue({ source: 'planet', character: 'Luke Skywalker' });
          render(<CharacterDetails />, { preloadedState });
        });
        test('Then character-details should be in the document', () => {
          expect(screen.getByTestId('character-details')).toBeInTheDocument();
        });
      });
    });
  });
});
