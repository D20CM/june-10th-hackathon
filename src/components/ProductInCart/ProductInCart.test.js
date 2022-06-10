import { render, screen } from '@testing-library/react';
import ProductCard from './ProductInCart';

test('App renders to screen', () => {
  render(<ProductCard />);
  const mainContainer = screen.getByTestId('ProductCard');
  expect(mainContainer).toBeInTheDocument();
});
