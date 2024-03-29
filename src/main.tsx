import React from 'react';
import { ErrorPage } from '@pages';
import { ErrorBoundary } from '@shared/error';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const mockType = import.meta.env.VITE_MOCK_TYPE;

if (mockType === 'msw') {
  const { worker } = await import('./mocks');
  await worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
