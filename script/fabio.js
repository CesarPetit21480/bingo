class cliente {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
}

class tipo {
  constructor(idTipo, descripcionTIpo, precio) {
    this.idTipo = idTipo;
    this.descripcionTIpo = descripcionTIpo;
    this.precio = precio;
  }
}


const nuevoTipo  = new tipo(1,"CLASE",1500);

const nuevoCLiente = new cliente("cesar",nuevoTipo)

console.log(nuevoCLiente);



