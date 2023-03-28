 class carton {
    constructor(nroCarton, listadoNumeros,lugares,indicesPintados) {
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

  listaCartones  = [];