import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

// Copyright component
const Copyright: React.FC<{ year: number; companyName: string }> = ({ year, companyName }) => (
  <p>&copy; {year} {companyName}. All rights reserved.</p>
);

// Footer component
const Footer: React.FC = () => {
  // Define your copyright information
  const copyrightYear = 2023;
  const companyName = 'POWER FLOWER';

  return (
    <footer className={styles['footer-container']}>
      <nav className={styles['footer-nav']}>
        <Link to="/store" className={styles['footer-link']}>
          STORE
        </Link>
        <Link to="/contact" className={styles['footer-link']}>
          CONTACT US
        </Link>
        <Link to="/faq" className={styles['footer-link']}>
          FAQ
        </Link>
      </nav>
      {/* Use the Copyright component with dynamic data */}
      <Copyright year={copyrightYear} companyName={companyName} />
    </footer>
  );
};

export default Footer;
