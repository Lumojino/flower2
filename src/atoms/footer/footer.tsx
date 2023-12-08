import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
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
      <p>&copy; 2023 POWER FLOWER. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
