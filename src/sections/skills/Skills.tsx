import React from 'react';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './Skills.module.css';
import { FaToolbox } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';
import { RiCodeBoxFill } from 'react-icons/ri';
import SkillBox from '../../components/skillBox/SkillBox';

const skillsFrontend = ['HTML5', 'CSS3', 'Javascript ES6', 'React', 'Redux', 'Next.js'];
const skillsBackend = ['Node.js', 'MongoDB', 'GCP', 'Express.js'];
const toolbox = ['Git', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD'];

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
                backgroundColor={'#c2d8c5'}
                icon={<RiCodeBoxFill color="#8ead92" size={30} />}
              ></SkillBox>
            </div>

            <div className={styles.box}>
              <SkillBox
                title="Backend"
                list={skillsBackend}
                backgroundColor={'#d5c2d8'}
                icon={<AiFillDatabase color="#b69eba" size={30} />}
              />
            </div>
            <div className={styles.box}>
              <SkillBox
                title="Toolbox"
                list={toolbox}
                backgroundColor={'#e3d5ac'}
                icon={<FaToolbox color="#ad9f76" size={30} />}
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Skills;
