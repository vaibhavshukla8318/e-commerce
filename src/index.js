import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import style from './App.module.css';
import MobileView from './component/MobileView'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={style.app}>
      <App /> 
    </div>
    <MobileView/>
  </React.StrictMode>
);

