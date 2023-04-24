import React from 'react';
import styles from './About.module.css';
import { Fade } from 'react-awesome-reveal';

const About: React.FC = () => {
  return (
    <>
      <Fade duration={4000} triggerOnce>
        <div className={styles.container} id="about">
          <div className={styles.content}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Hi, I&apos;m Agnes!</h2>
              <div className={styles.subtitle}>
                <h4>I love being creative, whether it’s coding or art.</h4>
              </div>
              <p className={styles.text}>
                My main focus is on frontend development, but I am also curious about the backend
                and enjoy learning more about it. Beyond my technical skills, I also have a lot of
                experience with leadership and working with people. As a former preschool teacher, I
                understand the importance of effective communication and teamwork.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default About;
