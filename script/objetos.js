class carton {
  constructor(nroCarton, listadoNumeros, lugares, indicesPintados) {
    this.nroCarton = nroCarton;
    this.listadoNumeros = listadoNumeros;
    this.lugares = lugares;
    this.indicesPintados = indicesPintados;
  }
}

class jugador {
  constructor(nombre, cartones) {
    this.nombre = nombre;
    this.cartones = cartones;
  }
}
class numeroBingo {
  constructor(nro) {
    this.nro = nro;
  }
}

let numerosBingo = [];

const cargoNumerosBingo = () => {
  for (let i = 0; i < 90; i++) {
    const numero = new numeroBingo(i + 1);
    numerosBingo.push(numero);

  }
};
