import React, { useState } from 'react';
import styles from './About.module.css';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import SkillBox from '../../components/skillBox/SkillBox';
import { Slide } from 'react-awesome-reveal';
import { RxDotFilled } from 'react-icons/rx';
import Button from './Button';

const About: React.FC = () => {
  const [activeButton, setActiveButton] = useState('about');

  const handleButtonClick = (buttonName: string): void => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className={styles.container} id="about">
        <div className={styles.buttonContainer}>
          <Button
            type={'about'}
            onClick={() => {
              handleButtonClick('about');
            }}
          >
            About {activeButton === 'about' && <RxDotFilled />}
          </Button>
          <Button
            type={'skills'}
            onClick={() => {
              handleButtonClick('skills');
            }}
          >
            Skills {activeButton === 'skills' && <RxDotFilled />}
          </Button>
        </div>
        {activeButton === 'about' && (
          <div className={`${styles.content} ${styles.contentAbout}`}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Hi, I&apos;m Agnes!</h2>
              <p className={`${styles.text} ${styles.aboutText}`}>
                My main focus is on frontend development, but I am also curious about the backend
                and enjoy learning more about it. Beyond my technical skills, I have a lot of
                experience with leadership and working with people. As a former preschool teacher, I
                understand the importance of effective communication and teamwork. I love to bring
                ideas to life through code and design, and I always strive to make things better,
                faster, and more efficient.
              </p>
              <p className={`${styles.text} ${styles.aboutText}`}>
                If you're looking for a enthusiastic developer with an eye for design, look no
                further. Let's create something amazing together!
              </p>
            </div>
          </div>
        )}
        {activeButton === 'skills' && (
          <div className={`${styles.content} ${styles.contentSkills}`}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Skills</h2>

              <p className={`${styles.text} ${styles.skillText}`}>
                During my education, we did almost one project a week for 6 months, which taught me
                to manage time and meet deadlines. Since then, I have worked on different projects -
                some for fun and some for work.
              </p>
              {/* <p className={styles.linkText}>Check out my projects on the link below!</p> */}
              <Link to="/projects" className={styles.link}>
                Go to Projects <IoMdArrowDropright />
              </Link>
            </div>
            <div className={styles.skillContainer}>
              <Slide direction="right" triggerOnce>
                <SkillBox
                  title={'Frontend'}
                  list={[
                    'Javascript',
                    'React',
                    'Redux',
                    'Next',
                    'TypeScript',
                    'Styled Components',
                    'CSS Modules',
                  ]}
                  color={''}
                />
              </Slide>
              <Slide direction="right" triggerOnce duration={2000}>
                <SkillBox
                  title={'Backend'}
                  list={['MongoDB', 'Node.js', 'GCP', 'Express']}
                  color={''}
                />
              </Slide>
              <Slide direction="right" triggerOnce duration={3000}>
                <SkillBox
                  title={'Toolbox'}
                  list={['Photoshop', 'Illustrator', 'Adobe XD', 'Procreate', 'Git', 'Figma']}
                  color={''}
                />
              </Slide>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
