import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MobileView from './component/MobileView';
import { Loading } from './component/LoadingAndError';
import  style from './App.module.css'

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <div className={style.app}>
      {loading ? (
        <Loading />
      ) : (
         
           <App/>
           )}
      </div>
      <MobileView/>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

