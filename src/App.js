import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skill from './components/Skills/Skill';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Profession from './components/Profational/Profession';
// import Homecom from './components/Homes/Homecom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Intro/>
      <Skill/>
      <Works/>
      <Profession/>
      <Contact/>
      <Footer/>
      <Routes>
        {/* <Route path="/" element={<Homecom />} /> */}
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
