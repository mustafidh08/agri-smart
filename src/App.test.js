import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Agri-Smart header and accessible elements', () => {
  render(<App />);
  const brandingElements = screen.getAllByText(/Agri-Smart/i);
  expect(brandingElements.length).toBeGreaterThan(0);

  const menuButton = screen.getByRole('button', { name: /Buka menu navigasi/i });
  expect(menuButton).toBeInTheDocument();
});

