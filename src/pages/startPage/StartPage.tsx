import React from 'react';
import About from '../../sections/about/About';
import Header from '../../sections/header/Header';
import Projects from '../../sections/projects/Projects';
import Skills from '../../sections/skills/Skills';

const StartPage: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default StartPage;