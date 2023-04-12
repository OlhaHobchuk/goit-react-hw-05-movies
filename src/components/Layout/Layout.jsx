import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.navigationContainer}>
      <nav className={css.navigation}>
        <NavLink className={css.navigationLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.navigationLink} to="/movies">
          Movies
        </NavLink>
      </nav>
      <main className={css.mainContainer}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
