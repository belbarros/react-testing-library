import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('The pokedex page', () => {
  it('has a heading', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /Encountered pokémons/i });
    expect(title).toBeInTheDocument();
  });
  it('shows only one pokemon at a time', () => {
    renderWithRouter(<App />);

    const pokemon = screen.getAllByTestId('pokemon-name');
    expect(pokemon).toHaveLength(1);
  });
  it('has the filter buttons', () => {
    renderWithRouter(<App />);

    const filterBtnQuantity = 7;
    const filterBtn = screen.getAllByTestId('pokemon-type-button');
    expect(filterBtn).toHaveLength(filterBtnQuantity);

    const electricBtn = screen.getByRole('button', { name: 'Electric' });
    expect(electricBtn).toBeDefined();
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    expect(fireBtn).toBeDefined();
  });
  it('has the All button', () => {
    renderWithRouter(<App />);

    const allBtn = screen.getByRole('button', { name: 'All' });
    expect(allBtn).toBeDefined();
    userEvent.click(allBtn);
    const currPkn = screen.getByText(/pikachu/i);
    const pkn = screen.getByTestId('pokemon-name');
    expect(pkn).toBe(currPkn);
  });
  it('has a next button', () => {
    renderWithRouter(<App />);

    const nextBtn = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(nextBtn).toBeDefined();
    userEvent.click(nextBtn);
    const nextPkn = screen.getByText(/charmander/i);
    expect(nextPkn).toBeDefined();
  });
});

// Obrigada querida amiga Emily Menezes pela força <3
