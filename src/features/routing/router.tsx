import { Layout } from '@shared/ui/Layout';
import { createBrowserRouter } from 'react-router-dom';
import { notFoundError, ErrorProvider } from '@shared/error';
import { ErrorPage, LazyHomePage, LazySandboxPage } from '@pages';
import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LazyHomePage />,
      },
      {
        path: routes.sandbox,
        element: <LazySandboxPage />,
      },
      {
        path: '*',
        element: (
          <ErrorProvider value={notFoundError}>
            <ErrorPage />
          </ErrorProvider>
        ),
      },
    ],
  },
]);
