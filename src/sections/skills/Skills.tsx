import React from 'react';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './Skills.module.css';
import { Slide } from 'react-awesome-reveal';
import SkillBox from '../../components/skillBox/SkillBox';

import NavLink from '../../components/navlink/NavLink';

const Skills: React.FC = () => {
  return (
    <>
      <Wrapper justify="center">
        <div className={styles.container}>
          <div className={styles.skillContainer}>
            <Slide direction="left" triggerOnce duration={3000}>
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
            <Slide direction="left" triggerOnce duration={2000}>
              <SkillBox
                title={'Backend'}
                list={['MongoDB', 'Node.js', 'GCP', 'Express']}
                color={''}
              />
            </Slide>
            <Slide direction="left" triggerOnce duration={1000}>
              <SkillBox
                title={'Toolbox'}
                list={['Photoshop', 'Illustrator', 'Adobe XD', 'Procreate', 'Git', 'Figma']}
                color={''}
              />
            </Slide>
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Skills</h2>

            <p className={styles.text}>
              During my education, we almost did one project a week for 6 months, which taught me to
              manage time and meet deadlines. Since then, I have worked on a couple of projects with
              different techniques to broaden my knowledge.
            </p>

            <NavLink linkType="projects" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Skills;
