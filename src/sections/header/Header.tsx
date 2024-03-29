import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './Header.module.css';
import HeroImg from '../../assets/hero-img.png';
import GreenBlob from '../../components/animation/GreenBlob';
import NavLink from '../../components/navlink/NavLink';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <Navbar />
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Frontend
              <br />
              Developer
            </h1>
            <p className={styles.portfolio}>PORTFOLIO: AGNES AHLMAN </p>

            <NavLink linkType={'cv'} />
          </div>
          <div className={styles.imgContainer}>
            <img src={HeroImg} className={styles.img} alt="Profile picture of Agnes Ahlman" />
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
