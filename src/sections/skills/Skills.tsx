import React from 'react';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './Skills.module.css';
// import { FaToolbox } from 'react-icons/fa';
// import { AiFillDatabase } from 'react-icons/ai';
// import { RiCodeBoxFill } from 'react-icons/ri';
import SkillBox from '../../components/skillBox/SkillBox';

const skillsFrontend = ['HTML5', 'CSS3', 'Javascript', 'React', 'Redux', 'Next.js', 'TypeScript'];
const skillsBackend = ['Node.js', 'MongoDB', 'GCP', 'Express.js'];
const toolbox = ['Git', 'Illustrator', 'Photoshop', 'Adobe XD'];

const Skills: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Wrapper justify="center">
          <div className={styles.skillBoxes}>
            <div className={styles.box}>
              <SkillBox
                title="Frontend"
                list={skillsFrontend}
                backgroundColor={'#d5c2d8'}
                color={'purple'}
              ></SkillBox>
            </div>

            <div className={styles.box}>
              <SkillBox
                title="Backend"
                list={skillsBackend}
                backgroundColor={'#d5c2d8'}
                color={'purple'}
              />
            </div>
            <div className={styles.box}>
              <SkillBox
                title="Toolbox"
                list={toolbox}
                backgroundColor={'#d5c2d8'}
                color={'purple'}
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Skills;
