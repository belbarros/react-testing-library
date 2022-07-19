import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('the Detais page', () => {
  it('has the correct info', () => {
    const { history } = renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });
    userEvent.click(link);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const title = screen.getByRole('heading', { name: 'Pikachu Details' });
    expect(title).toBeDefined();

    const summary = screen.getByRole('heading', { name: 'Summary' });
    const summTxt = screen.getByText(/This intelligent Pokémon/i);
    expect(summTxt).toBeDefined();
    expect(summary).toBeDefined();

    const mapTitle = screen.getByRole('heading', { name: 'Game Locations of Pikachu' });
    expect(mapTitle).toBeDefined();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDefined();
    const label = screen.getByText('Pokémon favoritado?');
    expect(label).toBeDefined();

    const map = screen.getAllByAltText('Pikachu location');
    expect(map).toHaveLength(2);
    expect(map[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  });
});
