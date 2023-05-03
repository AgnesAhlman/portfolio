import React from 'react';
import styles from './NavLink.module.css';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  linkType: 'cv' | 'projects';
}

const NavLink = ({ linkType }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      {linkType === 'cv' ? (
        <a href="cv_agnesahlman.pdf" download="cv_agnesahlman.pdf" className={styles.link}>
          Download CV
        </a>
      ) : (
        <RouterLink to="/projects" className={styles.link}>
          Go to Projects
        </RouterLink>
      )}
    </div>
  );
};

export default NavLink;
