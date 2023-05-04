import React, { useEffect, useState } from 'react';
import Project from '../../components/project/Project';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './ProjectPage.module.css';
import { allTags, projects } from './projects';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../sections/footer/Footer';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';

const ProjectPage: React.FC = () => {
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
            <div className={styles.gridParent}>
              <div className={styles.filterAndCountContainer}>
                <div className={styles.countUpContainer}>
                  <div className={styles.countUp}>
                    <p className={styles.counter}>+</p>
                    <CountUp end={22} duration={5} className={styles.counter} />
                  </div>
                  <p className={styles.counterText}>
                    Since I started programming, I have done over 22 projects. Both Frontend and
                    Fullstack projects.
                  </p>
                  <Link
                    to="https://github.com/AgnesAhlman"
                    target="_blank"
                    className={styles.githubLink}
                  >
                    See all on my Github <IoMdArrowDropright />
                  </Link>
                </div>
                <div className={styles.filterButtonsContainer}>
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
                </div>
              </div>
              <h2 className={styles.title}>PROJECTS</h2>
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
