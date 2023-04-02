import React from 'react';
import styles from './Footer.module.css';
import { SiMinutemailer } from 'react-icons/si';
import { MdPlace } from 'react-icons/md';
const Footer: React.FC = () => {
  return (
    <>
      <div id="contact" className={styles.container}>
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>Feel free to contact me!</h3>
          <div className={styles.linkContainer}>
            <div className={styles.infoContainer}>
              <SiMinutemailer />
              <p className={styles.infoText}>ahlman.agnes@gmail.com</p>
            </div>
            <div className={styles.infoContainer}>
              <MdPlace />
              <p className={styles.infoText}>Lund</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
