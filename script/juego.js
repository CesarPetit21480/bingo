// document.querySelector("#cartones").style.display = "none";

const nombreJugador = document.querySelector('#nombreJugador');

let i = 1;

nombreJugador.textContent = `Carge Jugador ${i}`;

const nombreJugadores = document.querySelector("#carga");
let newJugador;

let jugadores = [];

nombreJugadores.addEventListener("click", (e) => {



  let jug = document.querySelector("#juego");
  newJugador = new jugador(jug.value,null);

  jugadores.push(newJugador); 
  jug.value = "";

  console.log(jugadores);

i = i+1;

  nombreJugador.textContent = `Carge Jugador ${i}`;

 


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



