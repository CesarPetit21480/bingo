 class carton {
    constructor(nroCarton, listadoNumeros,lugares,indicesPintados) {
      this.nroCarton = nroCarton;
      this.listadoNumeros = listadoNumeros;
      this.lugares = lugares;
      this.indicesPintados = indicesPintados;
    }
  }
  
class jugador {
    constructor(nombre, carton) {
      this.nombre = nombre;
      this.carton = carton;
    }
  }

  listaCartones  = [];