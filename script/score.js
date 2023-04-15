const score = document.querySelector("#score");
const volver = document.querySelector("#volver");



const scores = [];
const url = "../JSON/score.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const Nuevoscore = new Posiciones(
        element.posicion,
        element.nombre,
        element.bolasJugadas
      );
      scores.push(Nuevoscore);
    });
    cargarScore();
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Proceso Finalizado");
  });

const cargarScore = () => {

  const li = document.createElement("li");
  li.classList.add("tituloScore");
  const cabeceraPosicion = document.createElement("h2");
  const cabeceraNombre = document.createElement("h2");
  const cabeceraBolas = document.createElement("h2");

  li.classList.add("score");
  cabeceraPosicion.textContent = "POSICION";
  cabeceraNombre.textContent = "NOMBRE";
  cabeceraBolas.textContent = "BOLAS JUGADAS";

  li.appendChild(cabeceraPosicion);
  li.appendChild(cabeceraNombre);
  li.appendChild(cabeceraBolas);
  score.appendChild(li);

  scores.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("score");
    const posicion = document.createElement("h2");
    const nombre = document.createElement("h2");
    const bolasJugadas = document.createElement("h2");

    posicion.textContent = element.posicion;
    nombre.textContent = element.nombre;
    bolasJugadas.textContent = element.bolasJugadas;
    li.appendChild(posicion);
    li.appendChild(nombre);
    li.appendChild(bolasJugadas);
    score.appendChild(li);
  });
};


volver.addEventListener("click", () => {
  location.href = "/";
});
