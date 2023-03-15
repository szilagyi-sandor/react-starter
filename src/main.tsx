import React from 'react';
import { ErrorPage } from '@pages';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css';
import { App } from './App';
import { ErrorBoundary } from './shared/error';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
