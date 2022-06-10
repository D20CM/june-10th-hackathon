import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

test('App renders to screen', () => {
  render(<ShoppingCart />);
  const mainContainer = screen.getByTestId('ShoppingCard');
  expect(mainContainer).toBeInTheDocument();
});
