import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './Header.module.css';
import HeroImg from '../../assets/heroImg.png';
import GreenBlob from '../../components/animation/GreenBlob';
import { Link } from 'react-router-dom';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

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
        <div className={styles.linkContainer}>
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
            <Link
              to="https://www.instagram.com/artbyahlman/"
              target="_blank"
              className={styles.link}
            >
              <RiInstagramFill size={30} />
            </Link>
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
