import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('Calls msw properly', async () => {
    render(<HomePage />);
    await waitFor(() => screen.findByText('Hello world!'));
  });
});
