import React from 'react';
import styles from './Projects.module.css';

import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Animation from '../../../public/project-animation-slow.json';
import { IoMdArrowDropright } from 'react-icons/io';

const Projects: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.cell2}>
            <Lottie animationData={Animation} loop={true} />
          </div>
          <div className={styles.cell1}>
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.text}>Check out my projects on the link below!</p>
            <Link to="/projects" className={styles.link}>
              See Projects <IoMdArrowDropright />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
