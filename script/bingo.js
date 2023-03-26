// variables

let bingo = [];
let cartonSel;
let cartonElegido;
let cartonesPromp;
let estaCargado;
let contP1 = 0;
let contp2 = 0;

// creacion objetos


// class carton {
//   constructor(nroCarton, listadoNumeros) {
//     this.nroCarton = nroCarton;
//     this.listadoNumeros = listadoNumeros;
//   }
// }

// class jugador {
//   constructor(nombre, carton) {
//     this.nombre = nombre;
//     this.carton = carton;
//   }
// }

// const cartones = [];
// const jugadores = [];
// let numerosJugados = [];
// let nroGenerado;

// // funciones 

// const generoCartones = () => {
//   const listaNros = [];

//   for (let i = 0; i < 6; i++) {
//     do {
//       nroGenerado = Math.floor(Math.random() * (50 - 1) + 1);
//     } while (verificoSiExiste(nroGenerado, listaNros));

//     listaNros.push(nroGenerado);
//   }
//   const nroAletaorioCarton = Math.floor(Math.random() * 1000 + 1);
//   const cartonNuevo = new carton(nroAletaorioCarton, listaNros);
//   cartones.push(cartonNuevo);
// };

// const verificoSiExiste = (numero, lista) => {
//   let existe = false;
//   existe = lista.includes(parseInt(numero));
//   return existe;
// };

// const cargoCartones = (numero) => {
//   const numerosj1 = jugadores[0].carton[0].listadoNumeros;
//   const numerosj2 = jugadores[1].carton[0].listadoNumeros;
//   let existep1 = verificoSiExiste(numero, numerosj1);
//   let existep2 = verificoSiExiste(numero, numerosj2);
//   if (existep1) contP1++;
//   if (existep2) contp2++;
// };

// const muestroCartones = () => {
//   cartonesPromp = undefined;
//   cartonesPromp = `\n *CARTONES DISPONIBLES* \n`;
//   for (carton of cartones) {
//     let muestro;
//     for (let j = 0; j < 6; j++) {
//       if (muestro)
//         if (j === 5) muestro += carton.listadoNumeros[j];
//         else muestro += carton.listadoNumeros[j] + "-";
//       else muestro = carton.listadoNumeros[j] + "-";
//     }
//     cartonesPromp += ` \n Carton: ${carton.nroCarton} Nro : ${muestro} \n`;
//   }
// }; // creo los cartones

// const existeCarton = (nroCarton) => {
//   const esValido = cartones.some(
//     (carton) => parseInt(carton.nroCarton) === parseInt(nroCarton)
//   );

//   if (!esValido) {
//     alert("nro carton erroneo");
//   }

//   return esValido;
// };

// const quitoCarton = (indice) => {
//   cartones.splice(indice, 1);
// };

// //carga Para JUugada

// for (let i = 0; i < 10; i++) {
//   generoCartones();
// }

// muestroCartones();
// const p1 = prompt("INGRESE NOMBRE PRIMER JUGADOR");

// do {
//   cartonSel = prompt(
//     `Seleccion un nro carton disponbles en la consola \n ${cartonesPromp}`
//   );
// } while (!existeCarton(cartonSel));

// cartonElegido = cartones.filter((carton) => parseInt(carton.nroCarton) === parseInt(cartonSel));
// const j1 = new jugador(p1, cartonElegido);
// jugadores.push(j1);

// const indice1 = cartones.map((carton) => parseInt(carton.nroCarton)).indexOf(parseInt(cartonSel));
// quitoCarton(indice1);
// muestroCartones();
// const p2 = prompt("INGRESE NOMBRE SEGUNDO JUGADOR");

// do {
//   cartonSel = prompt(
//     `Seleccion un nro carton disponbles en la consola \n ${cartonesPromp}`
//   );
// } while (!existeCarton(cartonSel));

// cartonElegido = cartones.filter(
//   (carton) => parseInt(carton.nroCarton) === parseInt(cartonSel)
// );
// const j2 = new jugador(p2, cartonElegido);

// const indice2 = cartones
//   .map((carton) => parseInt(carton.nroCarton)).indexOf(parseInt(cartonSel));
//   quitoCarton(indice2);
//   muestroCartones();

// jugadores.push(j2);

// console.table("jugador ", jugadores[0]);
// console.table("jugador ", jugadores[1]);

// alert("QUE COMIENZE EL JUEGO!!!!!");

// // Logica Juego

// for (let i = 0; i < bingo.length; i++) {
//   do {
//     aleatorio = Math.floor(Math.random() * (50 - 1) + 1);
//     numeroBingo = bingo[aleatorio];
//     estaJugado = verificoSiExiste(numeroBingo, numerosJugados);
//   } while (estaJugado);

//   numerosJugados[numerosJugados.length] = numeroBingo;

//   alert(`el Numero ${i + 1} es ${numeroBingo}`);

//   cargoCartones(numeroBingo);

//   if (contP1 === 6) {
//     Swal.fire({
//       title: `el ganador del juego es ${
//         jugadores[0].nombre
//       } con los numero ${jugadores[0].carton[0].listadoNumeros.toString()}`,
//       showClass: {
//         popup: "animate__animated animate__fadeInDown",
//       },
//       hideClass: {
//         popup: "animate__animated animate__fadeOutUp",
//       },
//     });

//     break;
//   }
//   if (contp2 === 6) {
//     Swal.fire({
//       title: `el ganador del juego es ${
//         jugadores[1].nombre
//       } con los numero ${jugadores[1].carton[0].listadoNumeros.toString()}`,
//       showClass: {
//         popup: "animate__animated animate__fadeInDown",
//       },
//       hideClass: {
//         popup: "animate__animated animate__fadeOutUp",
//       },
//     });
//     break;
//   }

//   console.log("numeros Jugados", numerosJugados);
//   console.log("cont 1", contP1);
//   console.log("cont 2", contp2);
// }
