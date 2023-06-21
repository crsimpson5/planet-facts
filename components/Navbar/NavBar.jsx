import { Link, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./NavBar.scss";
import cn from "classnames";

export default function NavBar({ menuOpen, setMenuOpen, planets }) {
  return (
    <header className="navbar">
      <Link
        to="/earth"
        className="navbar__title"
        onClick={() => setMenuOpen(false)}
      >
        The Planets
      </Link>
      <CSSTransition in={menuOpen} timeout={250} classNames="navbar__nav">
        <nav className={cn("navbar__nav", menuOpen && "is-open")}>
          {planets.map((planet) => (
            <NavLink
              key={planet}
              to={`/${planet}`}
              className={cn("navbar__nav-item", ({ isActive }) =>
                isActive ? "active" : ""
              )}
              style={{
                "--accent": `var(--accent-${planet})`,
                "--color": `var(--color-${planet})`
              }}
              onClick={() => setMenuOpen(false)}
            >
              {planet}
            </NavLink>
          ))}
        </nav>
      </CSSTransition>
      <button
        className="navbar__hamburger button"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="visually-hidden">menu</span>
        <img src="assets/icon-hamburger.svg" alt="" />
      </button>
    </header>
  );
}
