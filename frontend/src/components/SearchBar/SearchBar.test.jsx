import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

function renderWithProviders(ui) {
  return render(
    <BrowserRouter>
        {ui}
    </BrowserRouter>
  );
}

test('renderiza el input y permite escribir', () => {
  renderWithProviders(<SearchBar />);

  const input = screen.getByPlaceholderText(/buscar productos/i);
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'notebook' } });
  expect(input.value).toBe('notebook');
});
