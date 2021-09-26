import React from 'react';
import { render, screen, fireEvent } from '../../utils/test.utils';

import PaginationButton from './PaginationButtons';

import { loadCharacters } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a PaginationButtons component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<PaginationButton previous="previous" next="next" />);
    });
    test('Then Prev should be in the document', () => {
      expect(screen.getByText(/Prev/i)).toBeInTheDocument();
    });
    test('Then Next should be in the document', () => {
      expect(screen.getByText(/Next/i)).toBeInTheDocument();
    });
    describe('And prev-button is clicked', () => {
      describe('And Api sends data', () => {
        test('Then loadCharacters should have been called with previous', () => {
          const prevButton = screen.getByTestId('prev-button');

          loadCharacters.mockReturnValue({
            type: actionTypes.LOAD_CHARACTERS,
            data: [],
          });
          fireEvent.click(prevButton);

          expect(loadCharacters).toHaveBeenCalledWith('previous');
        });
      });
      describe('And Api sends error', () => {
        test('Then loadCharacters should have been called with previous', () => {
          const prevButton = screen.getByTestId('prev-button');

          loadCharacters.mockReturnValue({
            type: actionTypes.API_ERROR,
            data: [],
          });
          fireEvent.click(prevButton);

          expect(loadCharacters).toHaveBeenCalledWith('previous');
        });
      });
    });
    describe('And next-button is clicked', () => {
      describe('And API sends data', () => {
        test('Then loadCharacters should have been called with next', () => {
          const nextButton = screen.getByTestId('next-button');

          loadCharacters.mockReturnValue({
            type: actionTypes.LOAD_CHARACTERS,
            data: [],
          });
          fireEvent.click(nextButton);

          expect(loadCharacters).toHaveBeenCalledWith('next');
        });
      });
      describe('And API sends error', () => {
        test('Then loadCharacters should have been called with next', () => {
          const nextButton = screen.getByTestId('next-button');

          loadCharacters.mockReturnValue({
            type: actionTypes.API_ERROR,
            data: [],
          });
          fireEvent.click(nextButton);

          expect(loadCharacters).toHaveBeenCalledWith('next');
        });
      });
    });
  });
});
