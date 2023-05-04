import React from 'react';
import styles from './About.module.css';
import { Fade } from 'react-awesome-reveal';

const About: React.FC = () => {
  return (
    <>
      <div className={styles.container} id="about">
        <div className={`${styles.content} ${styles.contentAbout}`}>
          <Fade duration={3000}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Hi, I&apos;m Agnes!</h2>
              <p className={`${styles.text} ${styles.aboutText}`}>
                Last year I made a career switch to pursue my dream of becoming a developer, and I
                have not looked back since. I have found it to be a passion of mine. My main focus
                is on frontend development, but I am also curious about the backend and enjoy
                learning more about it. Beyond my technical skills, I have a lot of experience with
                leadership and working with people. As a former preschool teacher, I understand the
                importance of effective communication and teamwork. I love to bring ideas to life
                through code and design, and I always strive to make things better, faster, and more
                efficient.
              </p>
              <p className={`${styles.text} ${styles.aboutText}`}>
                If you&apos;re looking for a enthusiastic developer with an eye for design, look no
                further. Let&apos;s create something amazing together!
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
