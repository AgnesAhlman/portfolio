import React from 'react';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './Skills.module.css';
import { FaToolbox } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';
import { RiCodeBoxFill } from 'react-icons/ri';

const Skills: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Wrapper>
          <div className={styles.skillBoxes}>
            <div className={styles.frontend}>
              <RiCodeBoxFill className={styles.iconFrontend} size={30} />
              <h5>Frontend</h5>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Javascript ES6</p>
              <p>React</p>
              <p>Redux</p>
              <p>Next.js</p>
            </div>
            <div className={styles.backend}>
              <AiFillDatabase className={styles.iconBackend} size={30} />
              <h5>Backend</h5>
              <p>Node.js</p>
              <p>GCP</p>
              <p>Express.js</p>
              <p>MongoDB</p>
            </div>
            <div className={styles.toolbox}>
              <FaToolbox className={styles.iconToolbox} size={30} />
              <h5>Toolbox</h5>
              <p>Adobe Illustrator</p>
              <p>Adobe Photoshop</p>
              <p>Adobe XD</p>
              <p>Git</p>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Skills;
