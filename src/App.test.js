import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders to screen', () => {
  render(<App />);
  const mainContainer = screen.getByTestId('App');
  expect(mainContainer).toBeInTheDocument();
});
