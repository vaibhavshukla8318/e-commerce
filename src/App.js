
import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Portfolio from './component/Portfolio'
import About from './component/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/e-commerce">
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
    </Routes>
 </BrowserRouter>
  )
}

export default App