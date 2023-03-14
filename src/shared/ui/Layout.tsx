import { routes } from '@features/routing';
import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import classes from './layout.module.css';

function Layout() {
  const { pathname } = useLocation();

  return (
    <section>
      <header>
        <h1>Default app</h1>
        <ul>
          <li>
            <Link to={routes.home}>Home</Link>
          </li>

          <li>
            <Link to={routes.sandbox}>Sandbox</Link>
          </li>
        </ul>
      </header>

      <main>
        <div className={classes.animation} key={pathname}>
          <Outlet />
        </div>
      </main>

      <ScrollRestoration />
    </section>
  );
}

export { Layout };
