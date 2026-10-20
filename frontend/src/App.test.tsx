import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from './Products/Products';

test('renders catalog products with their available images', () => {
  render(<Products />);

  expect(screen.getAllByText('Slim Shirt')).toHaveLength(2);
  const images = screen.getAllByRole('img', { name: 'Slim Shirt by Nike' });
  expect(images).toHaveLength(2);
  expect(images.map((image) => image.getAttribute('src'))).toEqual(['/d1.jpg', '/d1.jpg']);
});
