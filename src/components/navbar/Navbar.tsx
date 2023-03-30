import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.agnes}>
            <p>
              agnes<span>.</span>
            </p>
          </div>

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
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
