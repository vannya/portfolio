import React, { useState } from 'react';
import NavLink from 'components/Nav/NavLink';
import ToggleOverlay from 'components/ToggleOverlay';
import styles from './Navbar.module.css';
import { ReactComponent as Menu } from 'assets/menu.svg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.webNav}>
        <NavLink to="/" menuType="desktop">
          <li>HOME</li>
        </NavLink>
        <NavLink to="about" menuType="desktop">
          <li>ABOUT</li>
        </NavLink>
        <NavLink to="projects" menuType="desktop">
          <li>PROJECTS</li>
        </NavLink>
        <NavLink to="resume" menuType="desktop">
          <li>RESUME</li>
        </NavLink>
        <a
          href="https://github.com/vannya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>GITHUB</li>
        </a>
        <a
          href="https://www.linkedin.com/in/vannya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>LINKEDIN</li>
        </a>
      </ul>
      <button className={styles.menuToggle} onClick={setIsMenuOpen}>
        <Menu />
      </button>
      <ToggleOverlay hidden={!isMenuOpen} onClick={setIsMenuOpen} />
      <ul className={isMenuOpen ? styles.mobileNav : styles.mobileNavClosed}>
        <button className={styles.closeButton} onClick={setIsMenuOpen}>
          X
        </button>
        <section className={styles.title}>
          <h1>VAN TABBERT</h1>
          <p className={styles.headersubtitle}>Software Developer</p>
        </section>
        <li onClick={setIsMenuOpen}>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li onClick={setIsMenuOpen}>
          <NavLink to="about">ABOUT</NavLink>
        </li>
        <li onClick={setIsMenuOpen}>
          <NavLink to="projects">PROJECTS</NavLink>
        </li>
        <li onClick={setIsMenuOpen}>
          <NavLink to="resume">RESUME</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
