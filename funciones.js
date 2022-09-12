export const diccionario_valores = {
    1: {1: 100, 2: 200, 3: 1000, 4: 2000, 5: 4000, 6: 8000}, 
    2: {3: 200, 4: 400, 5: 800, 6: 1600}, 
    3: {3: 300, 4: 600, 5: 1200, 6: 2400}, 
    4: {3: 400, 4: 800, 5: 1600, 6: 3200}, 
    5: {1: 50, 2: 100, 3: 500, 4: 1000, 5: 2000, 6: 4000},
    6: {3: 600, 4: 1200, 5: 2400, 6: 4800}
}


export class Jugador {
    constructor(nombre) {
      this.nombre = nombre;
      this.puntuacion = 0;
    }
    
    getPuntuacion() {return this.puntuacion}

    setPuntuacion(valor) {this.puntuacion = valor;}

    getNombre() {return this.nombre;}
  }
