import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProjectPage from './pages/projectPage/ProjectPage';
import StartPage from './pages/startPage/StartPage';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
