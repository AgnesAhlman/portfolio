import React from 'react';
import Navbar from '../navbar/Navbar';
import Wrapper from '../wrapper/Wrapper';
import styles from './Header.module.css';
import HeroImg from '../../assets/heroImg.png';
import GreenBlob from '../animation/GreenBlob';
import PurpleBlob from '../animation/PurpleBlob';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <Navbar />
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <p>PORTFOLIO: AGNES AHLMAN</p>
            <h1 className={styles.title}>
              Frontend
              <br />
              Developer
            </h1>
          </div>
          <div className={styles.imgContainer}>
            <img src={HeroImg} className={styles.img} />
          </div>
          <div className={styles.animation}>
            <GreenBlob />
            <PurpleBlob />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
