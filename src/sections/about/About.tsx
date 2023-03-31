import React from 'react';
import styles from './About.module.css';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <div className={styles.container} id="about">
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

            {/* <div className={styles.links}>
              <Link
                to="https://www.linkedin.com/in/agnes-ahlman-1b2018251/"
                target="_blank"
                className={styles.link}
              >
                <IoLogoLinkedin size={30} />
              </Link>
              <Link to="https://github.com/AgnesAhlman" target="_blank" className={styles.link}>
                <FaGithub size={30} />
              </Link>
              <Link
                to="https://www.instagram.com/artbyahlman/"
                target="_blank"
                className={styles.link}
              >
                <RiInstagramFill size={30} />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
