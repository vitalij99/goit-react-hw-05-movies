import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AppBar.module.scss';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          {navItems.map(({ href, text }, i) => (
            <li key={i}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  isActive ? `${style.active}` : `${style.link}`
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
