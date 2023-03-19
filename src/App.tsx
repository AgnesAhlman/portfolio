import React from 'react';

import './App.css';
import About from './sections/about/About';
import Header from './sections/header/Header';
import Skills from './sections/skills/Skills';
import Projects from './sections/projects/Projects';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      {/* <Projects /> */}
    </>
  );
};

export default App;
