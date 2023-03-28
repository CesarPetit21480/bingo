// document.querySelector("#cartones").style.display = "none";

document.querySelector("#validar").style.display = "none";


const nombreJugador = document.querySelector("#nombreJugador");

let i = 1;

nombreJugador.textContent = `Carga Jugador ${i}`;

const nombreJugadores = document.querySelector("#carga");
let newJugador;

let jugadores = [];

nombreJugadores.addEventListener("click", (e) => {


  let jug = document.querySelector("#juego");

  let nombre =  jug.value;

  nombre = nombre.toUpperCase();

  if (nombre ===""){

    document.querySelector("#validar").style.display = "";
    return;

  }
  document.querySelector("#validar").style.display = "none";

  newJugador = new jugador(nombre, null);

  jugadores.push(newJugador);


  if (cartonesJugador.length === 0) {
    Swal.fire({
      title: `Debera seleccionar al menos un carton`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });   
    return;
  }
  newJugador.cartones = cartonesJugador


  Swal.fire({
    title: `jugador ${nombre} Cargado Exitosamente!!!!`,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });   



  i = i+1;
  nombreJugador.textContent = `Carga Jugador ${i}`;
  jug.value = ""

  //   jugadores.forEach((jugador) => {
  //     const jugada = document.querySelector("#jugador");
  //     const h2 = document.createElement("h2");
  //     const h3 = document.createElement("h3");
  //     const btn = document.createElement("button");

  //     h2.innerText = `BIENVENIDO ${jugador.nombre}`;
  //     h3.innerText = `VAMOS A SELECCIONAR LOS CARTONES A JUGAR`;
  //     btn.textContent = "FINALIZAR";
  //     jugada.appendChild(h2);

  //   });
});
