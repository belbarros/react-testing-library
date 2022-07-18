import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('the About page', () => {
  render(<About />);

  const pokeInfo = screen.getByText(/digital encyclopedia/i);
  expect(pokeInfo).toBeInTheDocument();

  const title = screen.getByRole('heading', { name: 'About Pokédex' });
  expect(title).toBeInTheDocument();

  const p1 = screen.getByText(/digital encyclopedia/i);
  const p2 = screen.getByText(/filter Pokémons by type/i);
  expect(p1).toBeInTheDocument();
  expect(p2).toBeInTheDocument();

  const img = screen.getByAltText('Pokédex');
  expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
