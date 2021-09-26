import React from 'react';

import { render, screen, fireEvent } from '../../utils/test.utils';
import { loadSearchedCharacters } from '../../redux/actions/actionCreators';

import SearchFilters from './SearchFilters';

jest.mock('../../redux/actions/actionCreators');

describe('Given a SearchFilters component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<SearchFilters />);
    });
    test('Then search-form should be in the document', () => {
      expect(screen.getByTestId('search-form')).toBeInTheDocument();
    });
    describe('And search-button is clicked', () => {
      test('Then loadSearchedCharacters should have been called', () => {
        const textInput = screen.getByTestId('text-input');
        const searchButton = screen.getByTestId('search-button');

        loadSearchedCharacters.mockReturnValue({ type: 'action' });
        fireEvent.change(textInput, { target: { value: 'luke' } });
        fireEvent.click(searchButton);

        expect(loadSearchedCharacters).toHaveBeenCalled();
      });
    });
  });
});
