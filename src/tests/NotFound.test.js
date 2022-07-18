import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

test('The Not Found page', () => {
  render(<NotFound />);

  const title = screen.getByRole('heading', { level: 2 });
  expect(title).toHaveTextContent('Page requested not found');

  const altTxt = 'Pikachu crying because the page requested was not found';
  const img = screen.getByAltText(altTxt);
  expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
