import { ReactComponent as Ipad } from '../../../public/ipad.svg';
import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Animation from '../../../public/projects.json';

const images = [
  '/synthax-ipad.png',
  '/synthax-ipad4.png',
  '/ipad-chatbot2.png',
  '/ipad-aba.png',
  '/ipad-aba2.png',
  '/ipad-game-maze.png',
];

const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.cell1}>
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.text}>Check out my projects on the link below!</p>
            <Link to="/projects" className={styles.link}>
              See Projects
            </Link>
          </div>

          <div className={styles.cell2}>
            <Lottie animationData={Animation} loop={true} />
            {/* <div className={styles.ipad}>
              <img
                src={images[currentImageIndex]}
                key={images[currentImageIndex]}
                className={styles.img}
                alt="ipad-image"
              />
              <Ipad className={styles.svg} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
