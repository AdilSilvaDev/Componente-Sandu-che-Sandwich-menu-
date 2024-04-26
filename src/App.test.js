import { render, screen } from '@testing-library/react'; // Importa funções de teste da biblioteca React Testing Library
import App from './App'; // Importa o componente App a ser testado

test('renders learn react link', () => {
  render(<App />); // Renderiza o componente App
  const linkElement = screen.getByText(/learn react/i); // Procura por um elemento que contenha o texto "learn react"
  expect(linkElement).toBeInTheDocument(); // Verifica se o elemento foi encontrado no documento
});

