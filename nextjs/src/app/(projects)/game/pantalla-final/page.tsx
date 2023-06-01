import '../style.css'

function page() {
  return (
    <div>

  <link rel="stylesheet" href="style"/>


  <header className="fHeader">
    <h1>Has terminado la partida</h1>
  </header>

  <div id="puntuacionFinal" className="fMensaje">
    <p>Tu puntuación ha sido de </p>
  </div>

  <div className="fBotones">
    <a className="fEnlaceBoton" href="pantalla-principal">
      <button className="fBoton">
        Jugar de nuevo
      </button>
    </a>
    <a className="fEnlaceBoton" href="index.html">
      <button className="fBoton">
        Volver al menú
      </button>
    </a>
  </div>

  <div className="flag flag-fr"></div>

  <div className="Layer"></div>

  <script src="main.js"></script>

    </div>
  )
}

export default page
