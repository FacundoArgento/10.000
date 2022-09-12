import {Jugador} from "./funciones.js"

const participantes = []


document.getElementById("introducir").addEventListener("click", () => {

    const nombre = document.getElementById("participante").value;

    participantes.push(nombre)

    const parrafoParticipantes = document.getElementById("nombreParticipante");  
    const input = document.getElementById("participante");

    parrafoParticipantes.innerHTML += "<li>" + nombre + "</li> <br>";
    input.value = "";
})


// comienza el juego

document.getElementById("comenzarJuego").addEventListener("click", () => {
    var url = "";
    
    participantes.forEach(nombre => {
        url += nombre + ",";
    });
    
    const url_final = url.substring(0, url.length -1)
    
    window.location.href = "./juego.html?participantes=" + url_final
})



    
