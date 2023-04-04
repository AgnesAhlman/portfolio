import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
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

          <div className={styles.links}>
            <ScrollLink to="about" smooth={true} className={styles.link}>
              About
            </ScrollLink>
            <RouterLink className={`${styles.routerLink}, ${styles.link}`} to="/projects">
              Projects
            </RouterLink>
            <ScrollLink to="contact" smooth={true} className={styles.link}>
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
