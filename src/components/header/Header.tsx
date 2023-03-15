import React from 'react';
import Navbar from '../navbar/Navbar';
import Wrapper from '../wrapper/Wrapper';
import styles from './Header.module.css';
import HeroImg from '../../assets/heroImg.png';
import GreenBlob from '../animation/GreenBlob';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <Navbar />
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <p className={styles.portfolio}>PORTFOLIO: AGNES AHLMAN</p>
            <h1 className={styles.title}>
              Frontend
              <br />
              Developer
            </h1>
            <div className={styles.cvLinkContainer}>
              <a href="cv_Agnes.pdf" download="cv_Agnes.pdf" className={styles.cvLink}>
                Download CV
              </a>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src={HeroImg} className={styles.img} />
          </div>
        </div>
      </Wrapper>
      <div className={styles.animation}>
        <GreenBlob />
      </div>
    </div>
  );
};

export default Header;
