import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Portfolio from './component/Portfolio';
import About from './component/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
