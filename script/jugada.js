const bolillero = document.querySelector("#bolillero");
const botonesBingo = document.querySelector("#botonesBingo");
const contenedorJuego = document.querySelector("#contenedorJuego");
const bolilla = document.getElementById("nroBingo");
cargoNumerosBingo();
const numerosJugados = [];

const indInicial = [0, 9, 18];
var listaJugadores = JSON.parse(localStorage.getItem("jugadores"));

const verificoCarton = (e) => {
  const value = e.target.id;
  const div = document.getElementById(value);
  div.style.backgroundColor = "red";
};

const buscoCartonJugador = (nro, id) => {

  const cartonesJugador = listaJugadores[id].cartones;

  return (cartonSeleccionado = cartonesJugador.some(
    (carton) => parseInt(carton.nroCarton) === parseInt(nro)
  ));
};

const validoNumerosCarton = async (nro, id) => {
  esBingo = true;
  const cartonesJugador = listaJugadores[id].cartones;

  const cartonSeleccionado = cartonesJugador.filter(
    (carton) => parseInt(carton.nroCarton) === parseInt(nro)
  );


  const numerosCarton = cartonSeleccionado[0].listadoNumeros;
  console.log(`cesar ${numerosCarton}`);

  for (let i = 0; i < numerosCarton.length; i++) {
    const nro = numerosCarton[i];
    const buscoJugados = numerosJugados.some(
      (nroJugados) => nroJugados === nro
    );

    if (!buscoJugados) {
      esBingo = false;
    }
  }
  return esBingo;
};

const verificoSiExiste = (numero, lista) => {
  let existe = false;
  existe = lista.includes(parseInt(numero));
  return existe;
};


const iniciar = () => {
  setInterval(() => {
    bolilla.classList.add("efectoEsfera", "textoEsfera");
  
    do {
      numeroAleatorio = Math.floor(Math.random() * (90 - 1 + 1) + 1);
      existe = verificoSiExiste(numeroAleatorio, numerosJugados);
    } while (existe);
  
    if (numerosJugados.length === 89) {
      clearInterval(1);
  
      bolilla.classList.remove("efectoEsfera");
  
      Swal.fire({
        title: `SE HAN JUGADO TODOS LOS NUMEROS`,
        imageUrl: "../image/bingo.gif",
      });
      return;
    }
  
    bolilla.textContent = numeroAleatorio;
    numerosJugados.push(numeroAleatorio);
    const control = document.querySelector(`#control-${numeroAleatorio}`);
  
    setTimeout(() => {
      control.classList.add("negro");
    }, 4000);
  }, 4000);
}



const sweetAlertBingo = async (valor) => {
  const { value: result } = await Swal.fire({
    title: `${nombre} HA CANTADO BINGO!!!!!`,
    text: "CARGE NRO CARTON",
    input: "text",
    showCancelButton: false,
    confirmButtonText: "Guardar",
    inputValidator: (nroCarton) => {
      const existeCarton = buscoCartonJugador(nroCarton, valor);

      if (!nroCarton || !existeCarton) {
        return "VERIFIQUE CARTON";
      } else {
        return undefined;
      }
    },
  });
  if (result) {
    const validoNumeroCarton = await validoNumerosCarton(result, valor);

    if (validoNumeroCarton) {
      Swal.fire({
        title: `FELICIDADES ${nombre} HAS GANADO EL BINGO!!!!!!!`,
        imageUrl: "../image/bingo.gif",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Bingo Incorrecto...",
        text: "Se Continua el bingo....",
      });
      iniciar();
    }
  }
};

const verificarBingo = (e) => {
  valor = e.target.id;
  const nombre = listaJugadores[valor].nombre;
  clearInterval(1);
  sweetAlertBingo(valor);
};

const cargoNumerosCarton = (nroCarton, indicesPintados, numerosCarton) => {
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

  let div = document.createElement("div");
  div.classList.add("d-flex", "justify-content-center", "mt-5", "mx-4");
  let button = document.createElement("button");
  button.textContent = `BINGO ${nombre}`;
  button.classList.add("btn", "btn-primary", "btnBingo");
  button.id = `${i}`;
  button.addEventListener("click", (ev) => verificarBingo(ev));

  valor = `#j${i + 1}`;
  console.log("valor", valor);
  const jugador = document.querySelector(valor);

  div.appendChild(button);
  jugador.appendChild(div);

  cartones.forEach((carton) => {
    nroCarton = carton.nroCarton;
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
    });

    jugador.appendChild(li);

    // pintoNumeros en gris

    indicesPintados = carton.indicesPintados;
    numerosCarton = carton.listadoNumeros;

    indicesPintados.forEach((element) => {
      const indice = `${nroCarton}-${element}`;
      const valor = document.getElementById(indice);
      valor.classList.add("negro");
    });
    cargoNumerosCarton(nroCarton, indicesPintados, numerosCarton);
  });
}

const tablero = document.querySelector("#tablero");
for (let i = 0; i < 90; i++) {
  const div = document.createElement("div");
  div.classList.add("nroControl");
  div.textContent = i + 1;
  div.id = `control-${i + 1}`;
  tablero.appendChild(div);
}


iniciar();

// const parar  = document.getElementById("parar");

// parar.addEventListener("click", ()=>{
//     clearInterval(1);
// })
