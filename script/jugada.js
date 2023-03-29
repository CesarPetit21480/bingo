
const bolillero = document.querySelector('#bolillero');


var listaJugadores = JSON.parse(localStorage.getItem('jugadores'));

console.log('listaJugadores', listaJugadores);


for (let i = 0; i < listaJugadores.length; i++){

    cartones = listaJugadores[i].cartones;


    valor = `#j${i+1}`;
    console.log('valor', valor);
    const jugador = document.querySelector(valor);

    cartones.forEach((carton) => {      


        
    console.log('carton', carton[0]);
           
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
          
            // li.addEventListener("click", () => {
            //   seleccionarCarton(valor);
            // })
          
            jugador.appendChild(li);
          
            // pintoNumeros en gris
          
            // for (let p = 0; p < 12; p++) {
            //   do {
            //     numerosAPintar = Math.floor(Math.random() * (27 - 1) + 1);
            //   } while (verificoSiEstaNegro(numerosAPintar));
          
            //   const indice = `${nroCarton}-${numerosAPintar}`;
            //   const valor = document.getElementById(indice);
            //   valor.classList.add("negro");
            // }
          
            // // verifico los lugares libres por decena
          
            // for (let j = 0; j < 9; j++) {
            //   for (let i = 0; i < 3; i++) {
            //     const valorBuscado = indInicial[i] + j;
            //     existePintado = indicesPintados.some(
            //       (element) => element === valorBuscado
            //     );
            //     if (existePintado) lugares[j] -= 1;
            //   }
            // }
          
            // // Genero los numero validando los lugares que tengo
            // lugares.forEach((espacios, index) => {
            //   const rand = index === 0 ? 10 : (index + 1) * 10;
            //   const min = index === 0 ? 1 : rand - 10;
            //   for (let j = 0; j < espacios; j++) {
            //     do {
            //       if (rand === 90)
            //         numeroAleatorio = Math.floor(Math.random() * (rand - min + 1) + min);
          
            //       numeroAleatorio = Math.floor(Math.random() * (rand - min) + min);
            //       existe = verificoSiExiste(numeroAleatorio, numerosCarton);
            //       estaEnlaSerie = verificoSiExiste(numeroAleatorio, nrosSerie);
            //     } while (existe);
            //     numerosCarton.push(numeroAleatorio);
            //     // nrosSerie.push(numeroAleatorio)
            //   }
            // });
          
            // //ordeno los numeros
            // numerosCarton.sort((a, b) => a - b);
            // // console.log("------------------------");
            // // console.log("indices", indicesPintados);
            // // console.log("lugares", indicesPintados);
            // // console.log("nrosCarton", numerosCarton);
            // // console.log("pintados",pintadosACubrir);
          
            // // llamo funcion cargar Numeros
            // cargoNumerosCarton();
            // // nrosSerie = [];
          
            // const nuevoCarton = new carton(
            //   nroCarton,
            //   numerosCarton,
            //   lugares,
            //   indicesPintados
            // );
            // listaCartones.push(nuevoCarton);
          



        
    })
}

