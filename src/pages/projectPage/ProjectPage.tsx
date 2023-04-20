import React, { useEffect, useState } from 'react';
import Project from '../../components/project/Project';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './ProjectPage.module.css';
import { projects } from './projects';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../sections/footer/Footer';
import DropdownMenu from '../../components/dropdown/Dropdown';

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
            <Navbar />
            <div className={styles.topSection}>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>PROJECTS</h2>
                <DropdownMenu activeTag={activeTag} filterProjects={filterProjects} />
              </div>

              {/* <div className={styles.buttonContainer}>
                <button
                  className={`${styles.button} ${activeTag === 'all' ? styles.active : ''}`}
                  onClick={() => {
                    filterProjects('all');
                  }}
                >
                  All Projects
                  {activeTag === 'all' && <BsCheck2 className={styles.icon} />}
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
                    {activeTag === tag && <BsCheck2 className={styles.icon} />}
                  </button>
                ))}
              </div> */}
            </div>
            <div className={styles.gridParent}>
              {activeProject.map((project) => (
                <Project
                  title={project.title}
                  tags={project.tags}
                  image={project.image}
                  key={project.title}
                  link={project.link}
                >
                  <p>{project.description}</p>
                </Project>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
