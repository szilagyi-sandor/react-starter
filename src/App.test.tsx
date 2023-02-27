import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Renders Vite + React', () => {
    render(<App />);
    const h1 = screen.getByRole('heading', {
      level: 1,
    });
    expect(h1).toHaveTextContent('Vite + React');
  });
});
