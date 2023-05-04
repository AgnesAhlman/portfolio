import React from 'react';
import About from '../../sections/about/About';
import Footer from '../../sections/footer/Footer';
import Header from '../../sections/header/Header';
import Skills from '../../sections/skills/Skills';

const StartPage: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Footer />
    </>
  );
};

export default StartPage;
