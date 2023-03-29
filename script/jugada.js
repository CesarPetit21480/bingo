const bolillero = document.querySelector("#bolillero");
const botonesBingo = document.querySelector("#botonesBingo");



const indInicial = [0, 9, 18];


var listaJugadores = JSON.parse(localStorage.getItem("jugadores"));

console.log("listaJugadores", listaJugadores);


const verificoCarton = (e) => {
 
 console.log(e.target.id);

 const value = e.target.id;

 const div = document.getElementById(value);
 div.style.backgroundColor = "red";

};
const cargoNumerosCarton = (nroCarton,indicesPintados,numerosCarton) => {
  let cantNroCarton = 0;
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 3; i++) {
      const valorBuscado = indInicial[i] + j;
      existePintado = indicesPintados.some(
        (element) => element === valorBuscado
      );

      if (!existePintado) {
        const aux = `${nroCarton}-${valorBuscado}`;
        const valor = document.getElementById(aux);
        valor.textContent = numerosCarton[cantNroCarton];
        cantNroCarton++;
      }
    }
  }
};

for (let i = 0; i < listaJugadores.length; i++) {
  cartones = listaJugadores[i].cartones;
  nombre = listaJugadores[i].nombre;  

  let button = document.createElement("button");
  button.textContent = `BINGO ${nombre}`;
  button.classList.add("btn","btn-primary","btnBingo"); 
  button.id = `${i}`;
  botonesBingo.appendChild(button)

  valor = `#j${i + 1}`;
  console.log("valor", valor);
  const jugador = document.querySelector(valor);

  cartones.forEach((carton) => {
    nroCarton = carton[0].nroCarton;
    const li = document.createElement("li");
    const valor = nroCarton;

    li.innerHTML += `
          <div class="bordeJuego d-flex row mt-3 me-3">
          
          <div>
            <h3 id="nro">Nro Carton: ${nroCarton}</h3>          
          </div>
          
          <hr>
          <div id=${nroCarton}>
            <div class="d-flex">
            <div id="${nroCarton}-0" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-1" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-2" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-3" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-4" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-5" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-6" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-7" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-8" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>  
            </div>
            <div class="d-flex">
            <div id="${nroCarton}-9" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-10" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-11" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-12" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-13" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-14" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-15" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-16" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-17" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>  
            </div>
            <div class="d-flex">
            <div id="${nroCarton}-18" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-19" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-20" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-21" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-22" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-23" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-24" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-25" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>
            <div id="${nroCarton}-26" class="filaJuego d-flex justify-content-center align-items-center text-white"></div>  
            </div>
          </div>
          </div>
          `;
    li.addEventListener("click", (e) => {
      verificoCarton(e);
    })

    jugador.appendChild(li);

    // pintoNumeros en gris

    indicesPintados = carton[0].indicesPintados;
    numerosCarton = carton[0].listadoNumeros; 

    indicesPintados.forEach((element) =>{
      const indice = `${nroCarton}-${element}`;
      const valor = document.getElementById(indice);
      valor.classList.add("negro");
    })
    cargoNumerosCarton(nroCarton,indicesPintados,numerosCarton);  
  });
}
const bolilla  = document.getElementById('nroBingo');
setInterval(() => {
  numeroAleatorio = Math.floor(Math.random() * (90 - 1 + 1) + 1);
  bolilla.textContent = numeroAleatorio;
}, 3000);







// const parar  = document.getElementById("parar");

// parar.addEventListener("click", ()=>{
//     clearInterval(1);
// })
