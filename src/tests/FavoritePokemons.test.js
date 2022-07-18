import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import data from '../data';
import renderWithRouter from '../renderWithRouter';

test('The favorite Pokemon page with no favorites', () => {
  render(<FavoritePokemons />);

  const noFaves = screen.getByText(/No favorite pokemon found/i);
  expect(noFaves).toBeInTheDocument();
});

test('The favorite Pokemon page with favorites', () => {
  renderWithRouter(<FavoritePokemons pokemons={ [data[0], data[1]] } />);

  const faves = screen.getAllByTestId('pokemon-name');
  expect(faves).toHaveLength(2);
});
