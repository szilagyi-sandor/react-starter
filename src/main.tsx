import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './shared/error/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback="Sorry, something went wrong.">
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
