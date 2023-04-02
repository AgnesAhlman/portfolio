import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <>
      <div className={styles.container} id="about">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2ebe9"
            fillOpacity="1"
            d="M0,224L34.3,229.3C68.6,235,137,245,206,245.3C274.3,245,343,235,411,213.3C480,192,549,160,617,138.7C685.7,117,754,107,823,117.3C891.4,128,960,160,1029,165.3C1097.1,171,1166,149,1234,165.3C1302.9,181,1371,235,1406,261.3L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Hi, I&apos;m Agnes!</h2>
            <div className={styles.subtitle}>
              <h4>I love being creative, whether it’s coding or art.</h4>
            </div>
            <p className={styles.text}>
              My main focus is on frontend development, but I am also curious about the backend and
              enjoy learning more about it. Beyond my technical skills, I also have a lot of
              experience with leadership and working with people. As a former preschool teacher, I
              understand the importance of effective communication and teamwork.
            </p>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2ebe9"
            fillOpacity="1"
            d="M0,224L34.3,229.3C68.6,235,137,245,206,245.3C274.3,245,343,235,411,213.3C480,192,549,160,617,138.7C685.7,117,754,107,823,117.3C891.4,128,960,160,1029,165.3C1097.1,171,1166,149,1234,165.3C1302.9,181,1371,235,1406,261.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default About;
