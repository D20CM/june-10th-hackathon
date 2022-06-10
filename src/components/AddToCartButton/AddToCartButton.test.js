import { render, screen } from '@testing-library/react';
import AddTocardButton from './AddToCartButton';

test('App renders to screen', () => {
  render(<AddTocardButton />);
  const mainContainer = screen.getByTestId('AddTocardButton');
  expect(mainContainer).toBeInTheDocument();
});
