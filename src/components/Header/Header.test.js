import { render, screen } from '@testing-library/react';
import Header from './Header';

test('App renders to screen', () => {
  render(<Header />);
  const mainContainer = screen.getByTestId('Header');
  expect(mainContainer).toBeInTheDocument();
});
