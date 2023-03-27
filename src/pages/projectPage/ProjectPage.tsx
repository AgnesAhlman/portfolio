import React from 'react';
import Project from '../../components/project/Project';

const tags = ['Javascript', 'React', 'Redux', 'MongoDB', 'Node.js', 'GCP', 'Express.js'];

const ProjectPage: React.FC = () => {
  return (
    <>
      <div>
        <h2>PROJECTS</h2>
        <Project title={'Art By Ahlman'} tags={tags} image={'/artbahlman.png'}>
          <p> About hte project hahahaladöaödaö</p>
        </Project>
      </div>
    </>
  );
};

export default ProjectPage;
