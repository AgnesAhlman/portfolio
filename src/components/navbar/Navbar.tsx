import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link to="/" className={styles.agnes}>
            agnes<span>.</span>
          </Link>

          <Link to="/projects" className={styles.link}>
            projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
