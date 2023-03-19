import { ReactComponent as Ipad } from '../../../public/ipad.svg';
import React from 'react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <>
      <div>
        <h2>Projects</h2>
        <div className={styles.ipad}>
          <img src="/synthax-ipad.png" className={styles.img} />
          <Ipad className={styles.svg} />
        </div>
      </div>
    </>
  );
};

export default Projects;
