import React from 'react';
import styles from './About.module.css';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaGithub, FaToolbox } from 'react-icons/fa';
import { RiCodeBoxFill, RiInstagramFill } from 'react-icons/ri';
// import PurpleBlob from '../../assets/blob-purple2.svg';
import SkillBox from '../../components/skillBox/SkillBox';
import { AiFillDatabase } from 'react-icons/ai';

const skillsFrontend = ['HTML5', 'CSS3', 'Javascript ES6', 'React', 'Redux', 'Next.js'];
const skillsBackend = ['Node.js', 'MongoDB', 'GCP', 'Express.js'];
const toolbox = ['Git', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD'];

const About: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <div className={styles.skillBoxes}>
            <SkillBox
              title="Frontend"
              list={skillsFrontend}
              backgroundColor={'#c2d8c5'}
              icon={<RiCodeBoxFill color="#8ead92" size={30} />}
            ></SkillBox>

            <SkillBox
              title="Backend"
              list={skillsBackend}
              backgroundColor={'#d5c2d8'}
              icon={<AiFillDatabase color="#b69eba" size={30} />}
            />

            <SkillBox
              title="Toolbox"
              list={toolbox}
              backgroundColor={'#e3d5ac'}
              icon={<FaToolbox color="#ad9f76" size={30} />}
            />
          </div> */}

          <div className={styles.textContainer}>
            <h2 className={styles.title}>Hi, I&apos;m Agnes!</h2>
            <div className={styles.subtitle}>
              <h4>I love being creative, whether it’s coding or art.</h4>
            </div>
            <p className={styles.text}>
              I love problemsolving and my main focus is on frontend development, but I am also
              curious about the backend and enjoy learning more about it. Beyond my technical
              skills, I also have a lot of experience with leadership and working with people. As a
              former preschool teacher, I understand the importance of effective communication and
              teamwork. I am constantly seeking new opportunities to expand my skills and knowledge
              in web development, and I am excited to see where my passion will take me in the
              future.
            </p>

            <div className={styles.info}>
              <HiLocationMarker />
              <p>Lund,Sweden</p>
              <BsFillPersonFill />
              <p>28 years</p>
              <div className={styles.links}>
                <a>
                  <IoLogoLinkedin />
                </a>
                <a>
                  <FaGithub />
                </a>
                <a>
                  <RiInstagramFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
