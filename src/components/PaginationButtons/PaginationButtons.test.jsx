import React from 'react';
import { render, screen, fireEvent } from '../../utils/test.utils';

import PaginationButton from './PaginationButtons';

import { loadCharacters } from '../../redux/actions/actionCreators';

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
      test('Then loadCharacters should have been caled with previous', () => {
        const prevButton = screen.getByTestId('prev-button');

        loadCharacters.mockReturnValue({ type: 'string' });
        fireEvent.click(prevButton);

        expect(loadCharacters).toHaveBeenCalledWith('previous');
      });
    });
    describe('And next-button is clicked', () => {
      test('Then loadCharacters should have been caled with previous', () => {
        const nextButton = screen.getByTestId('next-button');

        loadCharacters.mockReturnValue({ type: 'string' });
        fireEvent.click(nextButton);

        expect(loadCharacters).toHaveBeenCalledWith('next');
      });
    });
  });
});
