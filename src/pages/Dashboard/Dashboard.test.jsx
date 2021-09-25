import React from 'react';

import { render, screen } from '../../utils/test.utils';

import Dashboard from './Dashboard';
import preloadedState from '../../mock/preloadedState.mock';

describe('Given a Dashboard component', () => {
  describe('When it renders', () => {
    beforeEach(() => {
      render(<Dashboard />, { preloadedState });
    });
    test('Then dashboard-container should be in the document', () => {
      expect(screen.getByTestId('dashboard')).toBeInTheDocument();
    });
  });
});
