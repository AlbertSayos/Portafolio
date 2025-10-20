//import logo from './logo.svg';
//import './App.css';
import './MenuTrabajos.css';

import Flecha from './img/flecha-derecha.png'

function MenuTrabajos() {
  
  return (
    <div className="MenuTrabajos">

      <div className="caja">
        <div className="TituloMenuTrabajos">
          <h3>Cavimed</h3>
        </div>
        <div className="CajaInferior">
          <span>Tienda web, donde programe el diseño de la web</span>
          <a href="https://www.cavimed.cl/" target="_blank">
              <img src={Flecha} className="icono" />
            </a>
        </div>

      </div>
      <div className="caja">
        <div className="TituloMenuTrabajos">
          <h3>Merkatari</h3>
        </div>
        <div className="CajaInferior">
          <span>Tienda web desarrollada con WordPress (diseño y configuración completa)</span>
          <a href="https://www.merkatari.cl/" target="_blank" rel="noopener noreferrer">
            <img src={Flecha} className="icono" alt="link Merkatari" />
          </a>
        </div>
      </div>

      

    </div>
  );
}

export default MenuTrabajos;