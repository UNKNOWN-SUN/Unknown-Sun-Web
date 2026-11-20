import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  it('should render the store name', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'UNKNOWN-SUN' })).toBeInTheDocument();
  });

  it('should render the shopping navigation links', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Cart' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign In' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Pants' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Shirts' })).toBeInTheDocument();
  });

  it('should render the shopping categories heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Shopping Categories' })
    ).toBeInTheDocument();
  });

  it('should render the products', () => {
    render(<App />);
    expect(screen.getAllByRole('link', { name: 'Slim Shirt' })).toHaveLength(3);
    expect(screen.getAllByText('$60')).toHaveLength(3);
  });
});
