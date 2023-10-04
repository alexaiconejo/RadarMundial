import React from 'react';
import './Main2.css'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';


export default function Main2() {


  return (



      <div id="Main2">

<div id="franja1">
<div id='reportaMain'>
<h4 id='bajadaPrincipal'> <span id='negritaTitulo'> RADAR (Registro de Ataques de Derechas Autoritarias Radicalizadas)</span>  es una herramienta colaborativa de participación política impulsada por la Revista Crisis, Maghweb, Amiga Jóven y Movimiento Popular por la Paz en el marco del proyecto Us & Them, cuyo objetivo es fortalecer la democracia y la defensa de los derechos humanos. Presentamos un mapeo de ataques políticos protagonizados por derechas autoritarias radicalizadas en distintos países con el fin de contribuir al diagnóstico colectivo y la elaboración de estrategias de autocuidado.</h4>
  <Link to= "/conecta"> <button id="botonReportaMain">NOSOTRXS</button></Link>



</div>


<ScrollLink
    to="App"
    spy={true} // Activa el modo espía
    smooth={true} // Activa el desplazamiento suave
    duration={500} // Duración de la animación (en milisegundos)
    offset={-70} // Ajusta un offset opcional (si tienes un encabezado fijo)
  >
    <button id='botonMain2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg><h5 id='botonMapaText'>mapa</h5></button>
  </ScrollLink></div>

 

 

<div id='separadorMain'>
          <div id='bloqueI'></div>
          <div id='bloqueD'></div>
        </div>

        <div id='franja2'>

          <div id='notasMain'>
            <button className='logosWeb'><img className='logosImg' src="crisis.png" alt="Crisis" /></button>
            <button className='logosWeb'><img className='logosImg' src="maghweb.png" alt="Maghweb" /></button>
            <button className='logosWeb'><img className='logosImg' src="usAndThem.png" alt="Us and Them" /></button>
            <button className='logosWeb'><img className='logosImg' src="ue.png" alt="European Union" /></button>
            <button className='logosWeb'><img className='logosImg' src="movimientoPorLaPaz.png" alt="Movimiento por La Paz" /></button>
            <button className='logosWeb'><img className='logosImg' src="amigaJoven.png" alt="Amiga Joven" /></button>


          </div>


          <div id='botoneraMain'>

            <div id='contactoMain'>
              <h2 id='conectaTextMain'>RADAR es una herramienta dinámica en construcción. Se encuentra abierta a recibir aportes de información.</h2>
              <button id="botonConectaMain" ><a href="https://docs.google.com/forms/d/e/1FAIpQLSe5pKXuvkvSUiwI_YEq5OZrfXCmpcsDuz_6co_iS2Qags80_A/viewform" target="_blank" rel="noopener noreferrer"><h2 id='reportaBotonText'>REPORTÁ UN HECHO</h2></a></button>
            </div>

          
          </div>


        </div>
      



    </div>);
}

