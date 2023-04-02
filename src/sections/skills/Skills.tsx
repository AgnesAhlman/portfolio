import React from 'react';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './Skills.module.css';
// import { FaToolbox } from 'react-icons/fa';
// import { AiFillDatabase } from 'react-icons/ai';
// import { RiCodeBoxFill } from 'react-icons/ri';
import SkillBox from '../../components/skillBox/SkillBox';
import SkillsImage from '../../assets/skills.png';

const skillsFrontend = ['HTML5', 'CSS3', 'Javascript', 'React', 'Redux', 'Next.js', 'TypeScript'];
const skillsBackend = ['Node.js', 'MongoDB', 'GCP', 'Express.js'];
const toolbox = ['Git', 'Illustrator', 'Photoshop', 'Adobe XD'];

const Skills: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Wrapper justify="center">
          {/* <div className={styles.skillBoxes}>
            <div className={styles.box}>
              <SkillBox title="Frontend" list={skillsFrontend} color={'purple'}></SkillBox>
            </div>

            <div className={styles.box}>
              <SkillBox title="Backend" list={skillsBackend} color={'purple'} />
            </div>
            <div className={styles.box}>
              <SkillBox title="Toolbox" list={toolbox} color={'purple'} />
            </div>
          </div> */}
          <img src={SkillsImage} alt="skills-image" width={500} />
        </Wrapper>
      </div>
    </>
  );
};

export default Skills;
