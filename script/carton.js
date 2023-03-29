let indicesPintados = [];
const indInicial = [0, 9, 18];
let lugares = [];
let pintadosACubrir = [];
let numerosCarton = [];
let nrosSerie = [];
let tieneLugar;
let numeroAleatorio;
let cantNroCarton;
const cartones = document.querySelector("#cartones");
let nroCarton;
let listaCartones = [];
let cartonesJugador = [];

// funciones

const verificoSiEstaNegro = (nro) => {
  estaPintado = indicesPintados.some((element) => element === nro);

  if (estaPintado) {
    return true;
  } else {
    indicesPintados.push(nro);
    return false;
  }
};

const validoPintadosDecena = (nro) => {
  let puedePintar = false;
  const aux = Math.trunc(nro / 10);
  if (pintadosACubrir[aux] > 0 && pintadosACubrir[aux] !== 0) {
    pintadosACubrir[aux]--;
    puedePintar = true;
  }
  return puedePintar;
};

const verificoSiExiste = (numero, lista) => {
  let existe = false;
  existe = lista.includes(parseInt(numero));
  return existe;
};

const verificoLugar = (numero) => {
  let tieneLugar = false;
  const aux = Math.trunc(numero / 10);

  if (lugares[aux] > 0 && lugares[aux] !== 0) {
    lugares[aux]--;
    tieneLugar = true;
  }
  return tieneLugar;
};

const cargoNumerosCarton = () => {
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

const inicializo = () => {
  lugares = [3, 3, 3, 3, 3, 3, 3, 3, 3];
  pintadosACubrir = [9, 8, 8, 8, 8, 8, 8, 8, 8];
  numerosCarton = [];
  indicesPintados = [];
  cantNroCarton = 0;
};

// generando cartones

for (let i = 0; i < 6; i++) {
  inicializo();
  nroCarton = Math.floor(Math.random() * 1000 + 1);
  const li = document.createElement("li");
  const valor = nroCarton;

  li.innerHTML += `
<div class="borde d-flex row mt-3 me-3">

<div>
  <h3 id="nro">Nro Carton: ${nroCarton}</h3>
  <button id="btn-${nroCarton}"  onclick="seleccionarCarton(${nroCarton})" class = "btn btn-primary btnTamaño">SELECCIONAR</button>
</div>

<hr>
<div id=${nroCarton}>
  <div class="d-flex">
  <div id="${nroCarton}-0" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-1" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-2" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-3" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-4" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-5" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-6" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-7" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-8" class="fila d-flex justify-content-center align-items-center text-white"></div>  
  </div>
  <div class="d-flex">
  <div id="${nroCarton}-9" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-10" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-11" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-12" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-13" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-14" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-15" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-16" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-17" class="fila d-flex justify-content-center align-items-center text-white"></div>  
  </div>
  <div class="d-flex">
  <div id="${nroCarton}-18" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-19" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-20" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-21" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-22" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-23" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-24" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-25" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="${nroCarton}-26" class="fila d-flex justify-content-center align-items-center text-white"></div>  
  </div>
</div>
</div>
`;

  cartones.appendChild(li);

  // pintoNumeros en gris

  for (let p = 0; p < 12; p++) {
    do {
      numerosAPintar = Math.floor(Math.random() * (27 - 1) + 1);
    } while (verificoSiEstaNegro(numerosAPintar));

    const indice = `${nroCarton}-${numerosAPintar}`;
    const valor = document.getElementById(indice);
    valor.classList.add("negro");
  }

  // verifico los lugares libres por decena

  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 3; i++) {
      const valorBuscado = indInicial[i] + j;
      existePintado = indicesPintados.some(
        (element) => element === valorBuscado
      );
      if (existePintado) lugares[j] -= 1;
    }
  }

  // Genero los numero validando los lugares que tengo
  lugares.forEach((espacios, index) => {
    const rand = index === 0 ? 10 : (index + 1) * 10;
    const min = index === 0 ? 1 : rand - 10;
    for (let j = 0; j < espacios; j++) {
      do {
        if (rand === 90)
          numeroAleatorio = Math.floor(Math.random() * (rand - min + 1) + min);

        numeroAleatorio = Math.floor(Math.random() * (rand - min) + min);
        existe = verificoSiExiste(numeroAleatorio, numerosCarton);
        estaEnlaSerie = verificoSiExiste(numeroAleatorio, nrosSerie);
      } while (existe);
      numerosCarton.push(numeroAleatorio);

    }
  });

  //ordeno los numeros
  numerosCarton.sort((a, b) => a - b);

  // llamo funcion cargar Numeros
  cargoNumerosCarton();
  // nrosSerie = [];

  const nuevoCarton = new carton(
    nroCarton,
    numerosCarton,
    lugares,
    indicesPintados
  );
  listaCartones.push(nuevoCarton);
}

console.log("------------------------------------------------");
console.log(listaCartones);

const seleccionarCarton = (id) => {
  const btn = document.getElementById(`btn-${id}`);
  btn.disabled = true;

  const cartonSeleccionado = listaCartones.filter(
    (carton) => carton.nroCarton === id
  );
  cartonesJugador.push(cartonSeleccionado);

  console.log('cartones',cartonesJugador);
};


