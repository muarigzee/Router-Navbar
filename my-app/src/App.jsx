import React from 'react';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background-wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;