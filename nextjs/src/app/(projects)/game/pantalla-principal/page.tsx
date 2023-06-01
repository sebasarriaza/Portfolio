
function page() {
  return (
    <div>

  <link rel="stylesheet" href="style"/>
  <link rel="icon" type="image/x-icon" href="./images/icon.png"/>


  <header className="pHeader">
    <h1 id="titulo" className="pTitulo">¿CUÁL ES LA CAPITAL DE...?</h1>
  </header>

  <div id="central" className="pCentral">

    <div className="pDivEnunciado">
      <p id="enunciado" className="pEnunciado">ENUNCIADO</p>
      <div className="pImagenes">
        <img id="imagen"/>
      </div>
    </div>

    <div id="grupoRespuestas" className="pGrupoRespuestas">
      <div id="respuesta1" className="pRespuestas">
        <button id="botonRespuesta1" className="pRespuestasBoton"
          onclick="comprobarRespuesta(datos[continente][numeroPregunta].respuesta[0])">Respuesta1</button>
      </div>

      <div id="respuesta2" className="pRespuestas">
        <button id="botonRespuesta2" className="pRespuestasBoton"
          onclick="comprobarRespuesta(datos[continente][numeroPregunta].respuesta[1])">Respuesta2</button>
      </div>

      <div id="respuesta3" className="pRespuestas">
        <button id="botonRespuesta3" className="pRespuestasBoton"
          onclick="comprobarRespuesta(datos[continente] [numeroPregunta].respuesta[2])">Respuesta3</button>
      </div>

      <div id="respuesta4" className="pRespuestas">
        <button id="botonRespuesta4" className="pRespuestasBoton"
          onclick="comprobarRespuesta(datos[continente][numeroPregunta].respuesta[3])">Respuesta4</button>
      </div>
    </div>

    <div className="pSistemaPuntos">

      <div id="puntuacion">
        <p className="pPuntuacion">Puntuación</p>
      </div>

      <div>
        <p id="puntos"  className="pPuntos">0</p>
      </div>

    </div>

    <div>
      <p id="mostrarNumeroPregunta" className="pMostrarNumeroPregunta"></p>
    </div>

    <div>
      <img id="acierto" className="pAcierto" src="https://freepikpsd.com/file/2019/10/acierto-png-5-Transparent-Images.png"/>
    </div>

  </div>

  <div id="siguientePregunta" className="pDivSiguientePregunta">
    <button className="pSiguientePregunta" onclick="siguientePregunta()">Siguiente pregunta</button>
  </div>

  <div id="terminar" className="pTerminar">
    <a href="pantalla-final">
      <button className="pTerminarBoton">Terminar partida</button>
    </a>
  </div>

  <div className="Layer"></div>

  <script src="main.js"></script>

    </div>
  )
}

export default page
