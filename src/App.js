import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skill from './components/Skills/Skill';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
// import Homecom from './components/Homes/Homecom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Routes>
        {/* <Route path="/" element={<Homecom />} /> */}
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
