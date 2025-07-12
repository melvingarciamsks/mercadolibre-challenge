import React, { useEffect, useState } from 'react';
import './WelcomeTooltip.scss';
import { useWelcomeStore } from '../store/welcomeStore';

const WelcomeTooltip = () => {
  // const [show, setShow] = useState(false);
  const { shown, showOnce } = useWelcomeStore();

  const handleClose = () => {
    showOnce();
  };

  if (shown) return null;
  /*
  useEffect(() => {
    const alreadyShown = localStorage.getItem('welcome-tooltip-shown');
    if (!alreadyShown) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('welcome-tooltip-shown', 'true');
    setShow(false);
  };

  if (!show) return null;*/


  return (
    <div className="tooltip">
      <div className="tooltip__arrow"></div>  
      <div className="tooltip__box">
        <p className="tooltip__hello">Hola</p> 
        <p>Para realizar búsqudas, solo debes ingresar el nombre de lo que necesites. Pueden ser productos, marcas y más...</p>
        <button className="tooltip__close" onClick={handleClose}>×</button>
      </div>
      
    </div>
  );
};

export default WelcomeTooltip;
