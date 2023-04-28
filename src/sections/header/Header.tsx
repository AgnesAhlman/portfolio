import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './Header.module.css';
import HeroImg from '../../assets/heroImg.png';
import GreenBlob from '../../components/animation/GreenBlob';
import { IoMdArrowDropright } from 'react-icons/io';
import DownloadButton from '../../components/downloadbutton/DownloadButton';

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

            <div className={styles.cvLinkContainer}>
              <a href="cv_agnesahlman.pdf" download="cv_agnesahlman.pdf" className={styles.cvLink}>
                Download CV <IoMdArrowDropright />
              </a>
              {/* <DownloadButton /> */}
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
