//import logo from './logo.svg';
//import './App.css';
import './pantalla.css';
import iconoGithub from './img/github.png';
import iconoTrabajos from './img/lenguaje-de-programacion.png';
import iconoPersonal from './img/carpeta.png';
import iconoContactos from './img/comunicar.png';

function IconosSuperior(props){

    const abrirMenuTrabajo = () => {
        props.actualizarMenuTrabajo();
      };

      const abrirMenuPersonal = () => {
        props.actualizarPantallaPersonal();
      };

      const abrirMenuRedes = () => {
        props.actualizarPantallaRedes();
      };

  return (
    <div className="IconosSuperior">
        <div className="iconosArriba">
        <div className="columnaIcono">
          <span className="textoIconos">Github</span>
          <a href="https://github.com/AlbertSayos" target="_blank">
            <img src={iconoGithub} className="icono" />
          </a>
        </div>
        
        <div className="columnaIcono">
            <span className="textoIconos">Trabajos</span>
            <img src={iconoTrabajos} className="icono" onClick={abrirMenuTrabajo} />
        </div>

        <div className="columnaIcono">
          <span className="textoIconos">Personales</span>
          <img src={iconoPersonal} className="icono" onClick={abrirMenuPersonal} />
        </div>

        <div className="columnaIcono">
          <span className="textoIconos">Redes</span>
        <img src={iconoContactos} className="icono" onClick={abrirMenuRedes}/>
        </div>
        
      </div>
    </div>
  );
}

export default IconosSuperior;
