import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ErrorPage } from './pages';
import { ErrorBoundary } from './shared/error';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
