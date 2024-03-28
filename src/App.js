import React from 'react';
import './App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';

function App() {
  return (
    <BrowserRouter  basename="/homeopathy_website">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

