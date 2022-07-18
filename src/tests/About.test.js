import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('If the app has all the nav links', () => {
  render(<About />);
});
