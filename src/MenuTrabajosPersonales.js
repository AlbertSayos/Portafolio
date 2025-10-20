//import logo from './logo.svg';
//import './App.css';
import './MenuTrabajos.css';

import Flecha from './img/flecha-derecha.png'

function MenuTrabajosPersonales() {

  

  return (
    <div className="MenuTrabajos">

      <div className="caja">
        <div className="TituloMenuTrabajos">
          <h3>Portafolio</h3>
        </div>
        <div className="CajaInferior">
          <span>Portafolio basado en la consola vpet</span>
          <a href="" target="_blank">
              <img src={Flecha} className="icono" />
            </a>
        </div>
        <div className="TituloMenuTrabajos">
          <h3>Portafolio de Edición de Video</h3>
        </div>
        <div className="CajaInferior">
          <span>Proyectos audiovisuales con Premiere y After Effects</span>
          <a href="https://tinyurl.com/Portafolio-mundo-targa" target="_blank" rel="noopener noreferrer">
            <img src={Flecha} className="icono" alt="link Portafolio de video" />
          </a>
        </div>

      </div>

      

    </div>
  );
}

export default MenuTrabajosPersonales;