import { routes } from '@features/routing';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
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
        <Outlet />
      </main>
    </section>
  );
}

export { Layout };
