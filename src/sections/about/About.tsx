import React, { useState } from 'react';
import styles from './About.module.css';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import SkillBox from '../../components/skillBox/SkillBox';

const About: React.FC = () => {
  const [activeButton, setActiveButton] = useState('about');

  const handleButtonClick = (buttonName: string): void => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          className={styles.primaryButton}
          onClick={() => {
            handleButtonClick('about');
          }}
        >
          About
        </button>
        <button
          className={styles.button}
          onClick={() => {
            handleButtonClick('skills');
          }}
        >
          Skills
        </button>
      </div>
      {activeButton === 'about' && (
        <div className={styles.container} id="about">
          <div className={styles.content}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Hi, I&apos;m Agnes!</h2>
              <div className={styles.subtitle}>
                <h4>I love being creative, whether it’s coding or art.</h4>
              </div>
              <p className={styles.text}>
                My main focus is on frontend development, but I am also curious about the backend
                and enjoy learning more about it. Beyond my technical skills, I also have a lot of
                experience with leadership and working with people. As a former preschool teacher, I
                understand the importance of effective communication and teamwork.
              </p>
            </div>
          </div>
        </div>
      )}
      {activeButton === 'skills' && (
        <div className={styles.projectContainer}>
          <div className={styles.content}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Skills</h2>

              <p className={styles.text}>
                During my education, we did almost one project a week for 6 months, which taught me
                to manage time and meet deadlines. Since then, I ha ve worked on different projects
                - some for fun and some for work.
              </p>
              <p className={styles.text}>Check out my projects on the link below!</p>
              <Link to="/projects" className={styles.link}>
                See Projects <IoMdArrowDropright />
              </Link>
            </div>
            <div className={styles.skillContainer}>
              <SkillBox
                title={'Frontend'}
                list={[
                  'Javascript',
                  'React',
                  'Redux',
                  'Next',
                  'TypeScript',
                  'CSS Modules',
                  'Styled Components',
                ]}
                color={''}
              />
              <SkillBox
                title={'Backend'}
                list={['MongoDB', 'Node.js', 'GCP', 'Express']}
                color={''}
              />
              <SkillBox
                title={'Toolbox'}
                list={['Photoshop', 'Illustrator', 'Adobe XD', 'Procreate', 'Git', 'Figma']}
                color={''}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
