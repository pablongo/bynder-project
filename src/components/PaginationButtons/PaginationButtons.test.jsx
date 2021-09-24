import React from 'react';
import { render, screen } from '../../utils/test.utils';

import PaginationButton from './PaginationButtons';

describe('Given a PaginationButtons component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<PaginationButton previous="a" next="a" />);
    });
    test('Then Prev should be in the document', () => {
      expect(screen.getByText(/Prev/i)).toBeInTheDocument();
    });
    test('Then Next should be in the document', () => {
      expect(screen.getByText(/Next/i)).toBeInTheDocument();
    });
  });
});
