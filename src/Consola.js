import React, { useState } from 'react';
import Pantalla from './pantalla.js'
import './Consola.css';

const CustomButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="consola">
        <div class="borde"> 
            <div class="bordeNegro">
                <div class="pantallaConsola">
                    <Pantalla />
                </div>
            </div>
        </div>
        <div class="Botonera">
            <span> </span>
            <span> </span>
            <span> </span>
        </div>
    </div>
  );
};

export default CustomButton;