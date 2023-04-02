// document.querySelector("#cartones").style.display = "none";

document.querySelector("#validar").style.display = "none";
const nombreJugador = document.querySelector("#nombreJugador");

if (localStorage.getItem("jugadores")) {
  localStorage.clear();
}

let listaJugadores = [];
let i = 1;

nombreJugador.textContent = `Carga Jugador ${i}`;

const nombreJugadores = document.querySelector("#carga");
let newJugador;

nombreJugadores.addEventListener("click", (e) => {
  let jug = document.querySelector("#juego");

  let nombre = jug.value;

  nombre = nombre.toUpperCase();

  if (nombre === "") {
    document.querySelector("#validar").style.display = "";
    return;
  }
  document.querySelector("#validar").style.display = "none";

  newJugador = new jugador(nombre, null);

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
  newJugador.cartones = cartonesJugador;
  listaJugadores.push(newJugador);

  Swal.fire({
    title: `jugador ${nombre} Cargado Exitosamente!!!!`,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });

  const checkSimple = document.querySelector(`#simple`).checked;
  const checkMulti = document.querySelector(`#multiplayer`);


  if (checkSimple) {
    localStorage.setItem("jugadores", JSON.stringify(listaJugadores));
    document.querySelector("#cartones").style.display = "none";
    const jugadores = document.querySelector("#jugadores");
    jugadores.innerHTML = ``;
    let button = document.createElement("button");
    button.textContent = "QUE COMIENCE EL JUEGO!!!!!!";
    button.classList.add(
      "btn",
      "btn-primary",
      "mx-auto",
      "btnTamañoComienzo",
      "mt-5",
      "text"
    );
    button.id = "iniciar";
    jugadores.appendChild(button);
    const inicio = document.getElementById("iniciar");
    inicio.addEventListener("click", () => {
      location.href = "../paginas/juego.html";
    });
    return;
  }

  if (checkMulti) {
    if (i === 2) {
      localStorage.setItem("jugadores", JSON.stringify(listaJugadores));
      document.querySelector("#cartones").style.display = "none";
      const jugadores = document.querySelector("#jugadores");
      jugadores.innerHTML = ``;

      let button = document.createElement("button");
      button.textContent = "QUE COMIENCE EL JUEGO!!!!!!";
      button.classList.add(
        "btn",
        "btn-primary",
        "mx-auto",
        "btnTamañoComienzo",
        "mt-5",
        "text"
      );
      button.id = "iniciar";
      jugadores.appendChild(button);

      const inicio = document.getElementById("iniciar");
      inicio.addEventListener("click", () => {
        location.href = "../paginas/juego.html";
      });

      return;
    }
  }

  i = i + 1;
  nombreJugador.textContent = `Carga Jugador ${i}`;
  jug.value = "";
  cartonesJugador = [];
});
