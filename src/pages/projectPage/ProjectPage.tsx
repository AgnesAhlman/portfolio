import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../../components/project/Project';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './ProjectPage.module.css';
import { IoMdArrowDropleft } from 'react-icons/io';
import { projects } from './projects';

const ProjectPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Wrapper>
          <div className={styles.content}>
            <div className={styles.navContainer}>
              <Link to="/" className={styles.home}>
                <IoMdArrowDropleft />
                Home
              </Link>
              <h2 className={styles.title}>PROJECTS</h2>
            </div>

            {projects.map((project) => (
              <Project
                key={project.title}
                title={project.title}
                tags={project.tags}
                image={project.image}
              >
                <p>{project.description}</p>
              </Project>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ProjectPage;
