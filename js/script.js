document.addEventListener("DOMContentLoaded", function () {

    let btnJugar = document.getElementById("btnJugar");
    let btnInstrucciones = document.getElementById("btnInstrucciones");
    let btnVolver = document.getElementById("btnVolver");
    let btnInicio = document.getElementById("btnInicio");

    if (btnJugar) {
        btnJugar.addEventListener("click", function () {
            window.location.href = "juego.html";
        });
    }

    if (btnInstrucciones) {
        btnInstrucciones.addEventListener("click", function () {
            window.location.href = "instrucciones.html";
        });
    }

    if (btnVolver) {
        btnVolver.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }

    if (btnInicio) {
        btnInicio.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }

});

// SOLO ejecuta esto si estamos en juego.html
if (document.getElementById("pregunta")) {

    const preguntas = [

        {
            pregunta: "¿Cómo se llama la niña con poderes?",
            opciones: ["Nancy", "Eleven", "Max", "Joyce"],
            correcta: "Eleven"
        },

        {
            pregunta: "¿Cómo se llama el mundo alternativo?",
            opciones: ["Upside Down", "Dark World", "Shadow Zone", "Void"],
            correcta: "Upside Down"
        },

        {
            pregunta: "¿Quién es el jefe de policía?",
            opciones: ["Hopper", "Mike", "Steve", "Lucas"],
            correcta: "Hopper"
        }

    ];

    let indice = 0;
    let puntaje = 0;

    function cargarPregunta() {

        let p = preguntas[indice];

        document.getElementById("pregunta").innerText = p.pregunta;

        let respuestasHTML = "";

        p.opciones.forEach(op => {

            respuestasHTML += `<button onclick="verificarRespuesta('${op}')">${op}</button>`;

        });

        document.getElementById("respuestas").innerHTML = respuestasHTML;

        document.getElementById("progreso").innerText =
            "Pregunta " + (indice + 1) + " de " + preguntas.length;

    }

    window.verificarRespuesta = function (respuesta) {

        if (respuesta === preguntas[indice].correcta) {

            puntaje += 10;

            alert("Correcto!");

        } else {

            alert("Incorrecto");
        }

        indice++;

        if (indice < preguntas.length) {

            cargarPregunta();

        } else {

            window.location.href = "resultados.html?puntaje=" + puntaje;

        }

    }

    cargarPregunta();
}