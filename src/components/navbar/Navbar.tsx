import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <RouterLink to="/" className={styles.agnes}>
            agnes<span>.</span>
          </RouterLink>

          <RouterLink className={`${styles.routerLink}, ${styles.link}`} to="/projects">
            projects
          </RouterLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
