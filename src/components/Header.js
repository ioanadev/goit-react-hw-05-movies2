import { NavLink } from 'react-router-dom';
import './navActive.css';

export const Header = () => {
  return (
    <>
      <header className="p-3 mb-3 border-bottom shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className=" navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link link-color link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-4"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link link-color link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-4"
                    to="/movies"
                  >
                    Movies
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
