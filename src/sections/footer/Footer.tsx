import React from 'react';
import styles from './Footer.module.css';
import { SiMinutemailer } from 'react-icons/si';
import { MdPlace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
const Footer: React.FC = () => {
  return (
    <>
      <div id="contact" className={styles.container}>
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>Feel free to contact me!</h3>
          <div className={styles.linkContainer}>
            <a href="mailto:ahlman.agnes@gmail.com" className={styles.infoContainer}>
              <SiMinutemailer />
              <p className={styles.infoText}>ahlman.agnes@gmail.com</p>
            </a>
            <div className={styles.infoContainer}>
              <MdPlace />
              <p className={styles.infoText}>Lund</p>
            </div>
          </div>
        </div>
        <div className={styles.links}>
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
          <Link to="https://www.instagram.com/artbyahlman/" target="_blank" className={styles.link}>
            <RiInstagramFill size={30} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
