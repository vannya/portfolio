import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

// Footer
const Footer = ({ children }) => {
  return (
    <section className={styles.footer}>
      <div className={styles.copyright}>{children}</div>
    </section>
  );
};

export default Footer;

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
