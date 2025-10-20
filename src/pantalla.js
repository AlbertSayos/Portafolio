import React, { useState } from 'react';
import './pantalla.css';
import IconosSuperior from './IconosSuperior.js';
import MenuTrabajos from './MenuTrabajos.js';
import MenuTrabajosPersonales from './MenuTrabajosPersonales.js';
import MenuRedes from './MenuRedes.js';
import MenuSobreMi from './MenuSobreMi.js'; // 🔹 NUEVO

import iconoCarne from './img/pierna-de-pollo.png';
import iconoAtaque from './img/ataque.png';
import mascota from './img/Agumon128x256.gif';
import mascotaAtacando from './img/AgumonFuego.gif';
import mascotaComiendo from './img/agumonComida.gif';

const CustomButton = () => {
  const [mascotaImg, setMascotaImg] = useState(mascota);
  const [mostrarMenuTrabajo, setMostrarMenuTrabajo] = useState(false);
  const [mostrarMenuPersonales, setMostrarMenuPersonales] = useState(false);
  const [mostrarMenuRedes, setmostrarMenuRedes] = useState(false);
  const [mostrarMenuSobre, setMostrarMenuSobre] = useState(false); // 🔹 NUEVO

  const atacar = () => {
    setMascotaImg(mascotaAtacando);
    setTimeout(() => {
      setMascotaImg(mascota);
    }, 1000);
  };

  const comer = () => {
    setMascotaImg(mascotaComiendo);
    setTimeout(() => {
      setMascotaImg(mascota);
    }, 1400);
  };

  const actualizarMenuTrabajo = () => {
    setMostrarMenuTrabajo(!mostrarMenuTrabajo);
    setMostrarMenuPersonales(false);
    setmostrarMenuRedes(false);
    setMostrarMenuSobre(false);
  };

  const actualizarPantallaPersonal = () => {
    setMostrarMenuTrabajo(false);
    setMostrarMenuPersonales(!mostrarMenuPersonales);
    setmostrarMenuRedes(false);
    setMostrarMenuSobre(false);
  };

  const actualizarPantallaRedes = () => {
    setMostrarMenuTrabajo(false);
    setMostrarMenuPersonales(false);
    setmostrarMenuRedes(!mostrarMenuRedes);
    setMostrarMenuSobre(false);
  };

  const actualizarPantallaSobre = () => {
    setMostrarMenuTrabajo(false);
    setMostrarMenuPersonales(false);
    setmostrarMenuRedes(false);
    setMostrarMenuSobre(!mostrarMenuSobre);
  };

  return (
    <div className="pantalla">
      <IconosSuperior
        actualizarMenuTrabajo={actualizarMenuTrabajo}
        actualizarPantallaPersonal={actualizarPantallaPersonal}
        actualizarPantallaRedes={actualizarPantallaRedes}
        actualizarPantallaSobre={actualizarPantallaSobre} // 🔹 NUEVO
      />

      <div className="pantallaCentro">
        {!mostrarMenuTrabajo &&
          !mostrarMenuPersonales &&
          !mostrarMenuRedes &&
          !mostrarMenuSobre && <img src={mascotaImg} className="mascota" id="mascotaImg" />}

        {mostrarMenuTrabajo && <MenuTrabajos />}
        {mostrarMenuPersonales && <MenuTrabajosPersonales />}
        {mostrarMenuRedes && <MenuRedes />}
        {mostrarMenuSobre && <MenuSobreMi />} {/* 🔹 NUEVO */}
      </div>

      <div className="iconosAbajo">
        <img src={iconoAtaque} className="icono" onClick={atacar} />
        <img src={iconoCarne} className="icono" onClick={comer} />
      </div>
    </div>
  );
};

export default CustomButton;
