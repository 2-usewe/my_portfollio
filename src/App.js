import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
// import Homecom from './components/Homes/Homecom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Intro/>
      <Routes>
        {/* <Route path="/" element={<Homecom />} /> */}
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
