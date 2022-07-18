import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('If the app has all the nav links', () => {
  renderWithRouter(<App />);

  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByText(/about/i);
  expect(aboutLink).toBeInTheDocument();

  const favLink = screen.getByText(/favorite pokémons/i);
  expect(favLink).toBeInTheDocument();
});

test('The Home Link', () => {
  const { history } = renderWithRouter(<App />);

  const homeLink = screen.getByText(/home/i);
  userEvent.click(homeLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('The About Link', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByText(/about/i);
  userEvent.click(aboutLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('The Fav Link', () => {
  const { history } = renderWithRouter(<App />);

  const favLink = screen.getByText(/favorite pokémons/i);
  userEvent.click(favLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});
