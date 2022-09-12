import {Jugador} from "./funciones.js"

console.log(window.location.search)

// funciones para los dados
const btn_tirada_inicial= document.getElementById("tiradaInicial")
const btn_tirar_nuevamente = document.getElementById("tirarNuevamente")
const btn_plantarse = document.getElementById("plantarse")
const btn_puntuacion = document.getElementById("obtenerPuntuacion")

const botonesTiradaInicial = () => {
    btn_tirada_inicial.disabled = false;
    btn_tirar_nuevamente.disabled = true;
    btn_plantarse.disabled = true;
    btn_puntuacion.disabled = true;
}

const obtenerParticipantes = () => {
    const keys = window.location.search;

    const urlParametros = new URLSearchParams(keys);

    const nombres = urlParametros.getAll('participantes');

    const nombres_separados = nombres[0].split(",")

    return nombres_separados;
}

const crearTablaPuntuaciones = (participantes) => {
    let tabla = document.getElementById("tabla-puntuaciones");
    let cuerpoTabla = document.createElement("tbody");

    participantes.forEach(p => {
        let fila = document.createElement("tr");

        let td_nombre = document.createElement("td");
        td_nombre.innerHTML = p.getNombre();
        fila.appendChild(td_nombre);

        let td_puntuacion = document.createElement("td");
        td_puntuacion.innerHTML = p.getPuntuacion()
        fila.appendChild(td_puntuacion);

        cuerpoTabla.appendChild(fila);
    })
    
    tabla.appendChild(cuerpoTabla);
}


// creamos los jugadores
const participantes = []
obtenerParticipantes().forEach(nombre => {
    const jugador = new Jugador(nombre)
    participantes.push(jugador)
});

const participante_actual = participantes[0]
console.log("Participantes: " + participantes)
console.log("Participante actual: " + participante_actual.getNombre())

botonesTiradaInicial()  
crearTablaPuntuaciones(participantes)

// iniciar juego..

participante_actual.setPuntuacion(100)

crearTablaPuntuaciones(participantes)