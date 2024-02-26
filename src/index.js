import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/e-commerce'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
