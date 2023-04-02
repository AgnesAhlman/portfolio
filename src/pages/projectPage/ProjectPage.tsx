import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from '../../components/project/Project';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './ProjectPage.module.css';
import { IoMdArrowDropleft } from 'react-icons/io';
import { allTags, projects } from './projects';

const ProjectPage: React.FC = () => {
  // Button state
  const [activeProject, setActiveProject] = useState(projects);
  const [activeTag, setActiveTag] = useState('all');

  // Filter function
  const filterProjects = (tag: string): void => {
    setActiveTag(tag);
    if (tag === 'all') {
      setActiveProject(projects);
      return;
    }
    const filteredProjects = projects.filter((project) =>
      project.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
    );
    setActiveProject(filteredProjects);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

            {/*  BUTTON  */}
            <button
              className={`${styles.button} ${activeTag === 'all' ? styles.active : ''}`}
              onClick={() => {
                filterProjects('all');
              }}
            >
              All Projects
            </button>
            {allTags.map((tag) => (
              <button
                className={`${styles.button} ${activeTag === tag ? styles.active : ''}`}
                key={tag}
                onClick={() => {
                  filterProjects(tag);
                }}
              >
                {tag}
              </button>
            ))}
            <div className={styles.gridParent}>
              {activeProject.map((project) => (
                <Project
                  title={project.title}
                  tags={project.tags}
                  image={project.image}
                  key={project.title}
                >
                  <p>{project.description}</p>
                </Project>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ProjectPage;
