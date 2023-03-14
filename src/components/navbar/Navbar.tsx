import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.agnes}>
            <p>agnes.</p>
          </div>

          <div className={styles.links}>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
