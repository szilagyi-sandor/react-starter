import { Suspense } from 'react';
import { Layout } from '@shared/ui/Layout';
import { Routes, Route } from 'react-router-dom';
import { notFoundError, ErrorProvider } from '@shared/error';
import { ErrorPage, LazyHomePage, LazySandboxPage } from '@pages';
import { routes } from './routes';

function AppRoutes() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route index element={<LazyHomePage />} />

          <Route path={routes.sandbox} element={<LazySandboxPage />} />

          <Route
            path="*"
            element={
              <ErrorProvider value={notFoundError}>
                <ErrorPage />
              </ErrorProvider>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export { AppRoutes };
