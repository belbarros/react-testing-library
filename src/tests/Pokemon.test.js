import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('the Pokemon card', () => {
  it('shows the correct info on the page', () => {
    renderWithRouter(<App />);

    const pknName = screen.getByTestId('pokemon-name');
    const pknType = screen.getByTestId('pokemon-type');
    const pknWeight = screen.getByTestId('pokemon-weight');
    const pknSprite = screen.getByAltText('Pikachu sprite');

    expect(pknName).toBeDefined();
    expect(pknName).toHaveTextContent('Pikachu');
    expect(pknType).toBeDefined();
    expect(pknType).toHaveTextContent('Electric');
    expect(pknWeight).toHaveTextContent('Average weight: 6.0 kg');
    expect(pknSprite).toBeDefined();
    expect(pknSprite.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  it('has a functioning more info link & a star if favorite', () => {
    const { history } = renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });
    expect(link).toBeInTheDocument();

    userEvent.click(link);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    const star = screen.getByAltText('Pikachu is marked as favorite');
    expect(star.src).toBe('http://localhost/star-icon.svg');
  });
});
