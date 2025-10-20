import './pantalla.css';
import iconoGithub from './img/github.png';
import iconoTrabajos from './img/lenguaje-de-programacion.png';
import iconoPersonal from './img/carpeta.png';
import iconoContactos from './img/comunicar.png';
import iconoSobre from './img/info.png'; // 🔹 NUEVO ÍCONO

function IconosSuperior(props) {
  const abrirMenuTrabajo = () => {
    props.actualizarMenuTrabajo();
  };

  const abrirMenuPersonal = () => {
    props.actualizarPantallaPersonal();
  };

  const abrirMenuRedes = () => {
    props.actualizarPantallaRedes();
  };

  const abrirMenuSobre = () => {
    props.actualizarPantallaSobre(); // 🔹 NUEVO HANDLER
  };

  return (
    <div className="IconosSuperior">
      <div className="iconosArriba">
        <div className="columnaIcono">
          <span className="textoIconos">Github</span>
          <a href="https://github.com/AlbertSayos" target="_blank" rel="noopener noreferrer">
            <img src={iconoGithub} className="icono" alt="Github" />
          </a>
        </div>

        <div className="columnaIcono">
          <span className="textoIconos">Trabajos</span>
          <img src={iconoTrabajos} className="icono" alt="Trabajos" onClick={abrirMenuTrabajo} />
        </div>

        <div className="columnaIcono">
          <span className="textoIconos">Personales</span>
          <img src={iconoPersonal} className="icono" alt="Personales" onClick={abrirMenuPersonal} />
        </div>

        <div className="columnaIcono">
          <span className="textoIconos">Redes</span>
          <img src={iconoContactos} className="icono" alt="Redes" onClick={abrirMenuRedes} />
        </div>

        <div className="columnaIcono">
          <span className="textoIconos">Sobre mí</span>
          <img src={iconoSobre} className="icono" alt="Sobre mí" onClick={abrirMenuSobre} />
        </div>
      </div>
    </div>
  );
}

export default IconosSuperior;
