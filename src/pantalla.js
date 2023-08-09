import React, { useState } from 'react';
import './pantalla.css';
import IconosSuperior from './IconosSuperior.js'
import MenuTrabajos from './MenuTrabajos.js'
import MenuTrabajosPersonales from './MenuTrabajosPersonales.js'
import MenuRedes from './MenuRedes.js'

import iconoCarne from './img/pierna-de-pollo.png'
import iconoAtaque from './img/ataque.png'
import mascota from './img/Agumon128x256.gif'
import mascotaAtacando from './img/AgumonFuego.gif'
import mascotaComiendo from './img/agumonComida.gif'



const CustomButton = () => {
  const [mascotaImg, setMascotaImg] = useState(mascota);
  const [mostrarMenuTrabajo, setMostrarMenuTrabajo] = useState(false);
  const [mostrarMenuPersonales, setMostrarMenuPersonales] = useState(false);
  const [mostrarMenuRedes, setmostrarMenuRedes] = useState(false);

  const atacar = () => {
    setMascotaImg(mascotaAtacando);
    setTimeout(() => {
      setMascotaImg(mascota);
    }, 1000); // Cambiar a la imagen anterior después de 1 segundos (ajusta el tiempo según tus necesidades)
  };

  const comer = () => {
    setMascotaImg(mascotaComiendo);
    setTimeout(() => {
      setMascotaImg(mascota);
    }, 1400); // Cambiar a la imagen anterior después de 1,4 segundos (ajusta el tiempo según tus necesidades)
  };

  const actualizarMenuTrabajo = () => {
    setMostrarMenuTrabajo(!mostrarMenuTrabajo);
    setMostrarMenuPersonales(false);
    setmostrarMenuRedes(false);
  };

  const actualizarPantallaPersonal = () => {
    setMostrarMenuTrabajo(false);
    setMostrarMenuPersonales(!mostrarMenuPersonales);
    setmostrarMenuRedes(false);
  };

  const actualizarPantallaRedes = () => {
    setMostrarMenuTrabajo(false);
    setMostrarMenuPersonales(false);
    setmostrarMenuRedes(!mostrarMenuRedes);
  };

  return (
    <div className="pantalla">
      
      <IconosSuperior actualizarMenuTrabajo={actualizarMenuTrabajo} actualizarPantallaPersonal={actualizarPantallaPersonal} actualizarPantallaRedes={actualizarPantallaRedes} />

      <div className="pantallaCentro">
          {(!mostrarMenuTrabajo && !mostrarMenuPersonales && !mostrarMenuRedes) && (
            <img src={mascotaImg} className="mascota" id="mascotaImg" />
          )}
          {mostrarMenuTrabajo && !mostrarMenuPersonales && !mostrarMenuRedes && <MenuTrabajos />}
          {mostrarMenuPersonales && !mostrarMenuRedes && <MenuTrabajosPersonales />}
          {mostrarMenuRedes && <MenuRedes />}
        </div>

      <div className="iconosAbajo">
        <img src={iconoAtaque} className="icono" onClick={atacar} />
        <img src={iconoCarne} className="icono" onClick={comer} />
      </div>
    </div>
  );
};

export default CustomButton;