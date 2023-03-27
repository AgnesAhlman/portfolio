import { ReactComponent as Ipad } from '../../../public/ipad.svg';
import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

import { Link } from 'react-router-dom';

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
            <p>
              {' '}
              If youre interested in seeing some of the work Ive done, I invite you to check out my
              projects page. There, you can browse through a selection of my favorite projects and
              get a sense of the skills and experience Ive gained as a developer. Just click the
              link below to get started. Thanks for taking the time to check out my work!
            </p>
            <Link to="/projects">See Projects</Link>
          </div>
          <div className={styles.cell2}>
            <div className={styles.ipad}>
              <img
                src={images[currentImageIndex]}
                key={images[currentImageIndex]}
                className={styles.img}
                alt="ipad-image"
              />
              <Ipad className={styles.svg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
