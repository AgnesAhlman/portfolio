import React from 'react';

import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
    </>
  );
};

export default App;
