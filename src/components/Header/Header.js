import React, { Component } from "react";
import { Link } from "@reach/router";
import NavLink from "../NavLink";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import styles from "./Header.module.css";

class Header extends Component {
  state = {
    isMenuOpen: false
  };

  toggleMobileMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <section className={styles.header}>
        <section className={styles.title}>
          <h1>VAN TABBERT</h1>
          <p className={styles.headersubtitle}>Software Developer</p>
        </section>
        <nav className={styles.webnav}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="about">ABOUT</NavLink>
          <NavLink to="projects">PROJECTS</NavLink>
          <NavLink to="resume">RESUME</NavLink>
          <a
            href="https://github.com/vannya"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/vannya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </nav>
        <button
          className={styles.menutoggle}
          onClick={() => this.toggleMobileMenu()}
        >
          <Menu />
        </button>
        <section
          className={isMenuOpen ? styles.overlay : styles.overlayclosed}
          onClick={() => this.toggleMobileMenu()}
        />
        <nav className={isMenuOpen ? styles.mobilenav : styles.mobilenavclosed}>
          <section className={styles.mobiletitle}>
            <h1>VAN TABBERT</h1>
            <p className={styles.headersubtitle}>Software Developer</p>
          </section>
          <Link to="/" onClick={() => this.toggleMobileMenu()}>
            HOME
          </Link>
          <Link to="about" onClick={() => this.toggleMobileMenu()}>
            ABOUT
          </Link>
          <Link to="projects" onClick={() => this.toggleMobileMenu()}>
            PROJECTS
          </Link>
          <Link to="resume" onClick={() => this.toggleMobileMenu()}>
            RESUME
          </Link>
          <a
            href="https://github.com/vannya"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => this.toggleMobileMenu()}
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/vannya/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => this.toggleMobileMenu()}
          >
            LINKEDIN
          </a>
        </nav>
      </section>
    );
  }
}

export default Header;
