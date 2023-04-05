import React from 'react';
import { ErrorPage } from '@pages';
import ReactDOM from 'react-dom/client';
import { getAppsettings, AppsettingsProvider } from '@features/appsettings';
import { App } from './App';
import { ErrorBoundary } from './shared/error';

const startApp = async () => {
  const appsettings = await getAppsettings();

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <ErrorBoundary fallback={<ErrorPage />}>
        <AppsettingsProvider value={appsettings}>
          <App />
        </AppsettingsProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

startApp();
