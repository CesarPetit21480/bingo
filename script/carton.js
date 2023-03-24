// document.addEventListener("DOMContentLoaded");

// creo array

// const cartonMatriz = [2];
// cartonMatriz[0] = [9];
// cartonMatriz[1] = [9];
// cartonMatriz[2] = [9];

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 9; j++) {
//     cartonMatriz[i][j] = Math.floor(Math.random() * (90 - 1) + 1);
//   }
// }
// console.table(cartonMatriz);

indicesPintados = [];
indInicial = [0, 9, 18];
const lugares = [3, 3, 3, 3, 3, 3, 3, 3, 3];
const numerosCarton = [];
let tieneLugar;
let numeroAleatorio;
let cantNroCarton = 0;
const carton = document.querySelector("#cartones");
const nroCarton = Math.floor(Math.random() * 1000 + 1);



for (let i = 0; i < 10 ; i++) {

  

carton.innerHTML += `
<div class="borde d-flex row">
<h3 id="nro">Nro Carton: ${nroCarton}</h3>
<hr>
<div id=${nroCarton}>
  <div class="d-flex">
  <div id="0" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="1" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="2" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="3" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="4" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="5" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="6" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="7" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="8" class="fila d-flex justify-content-center align-items-center text-white"></div>  
  </div>
  <div class="d-flex">
  <div id="9" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="10" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="11" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="12" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="13" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="14" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="15" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="16" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="17" class="fila d-flex justify-content-center align-items-center text-white"></div>  
  </div>
  <div class="d-flex">
  <div id="18" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="19" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="20" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="21" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="22" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="23" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="24" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="25" class="fila d-flex justify-content-center align-items-center text-white"></div>
  <div id="26" class="fila d-flex justify-content-center align-items-center text-white"></div>  
  </div>
</div>
</div>
`;

}

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
        const indice = `${i}`;
        const valor = document.getElementById(valorBuscado);
        valor.textContent = numerosCarton[cantNroCarton];
        cantNroCarton++;
      }
    }
  }
};

// pintoNumeros en gris

for (let p = 0; p < 12; p++) {
  do {
    numerosAPintar = Math.floor(Math.random() * (27 - 1) + 1);
  } while (verificoSiEstaNegro(numerosAPintar));

  const indice = `${numerosAPintar}`;
  const valor = document.getElementById(indice);
  valor.classList.add("negro");
}

// verifico los lugares libres por decena

for (let j = 0; j < 9; j++) {
  for (let i = 0; i < 3; i++) {
    const valorBuscado = indInicial[i] + j;
    existePintado = indicesPintados.some((element) => element === valorBuscado);
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
    } while (existe);
    numerosCarton.push(numeroAleatorio);
  }
});

//ordeno los numeros
numerosCarton.sort((a, b) => a - b);

// llamo funcion cargar Numeros
cargoNumerosCarton();


carton.addEventListener("click", (evt) => {

    console.log(evt.target);
});