
let historialResultados = [];

let estadisticasColores = {
  rojo: 0,
  negro: 0
};

function generarNumeroAleatorio() {
  return Math.random();
}

function obtenerColorAleatorio() {
  let numero = generarNumeroAleatorio();
  if (numero < 0.5) {
    return "rojo";
  } else {
    return "negro";
  }
}

function actualizarMensaje(apuesta, colorGanador, montoApuesta) {
  let mensaje = "";

  if (apuesta === colorGanador) {
    let montoGanado = montoApuesta * 2;
    mensaje = "¡Ganaste! Apostaste al color " + apuesta + " y salió " + colorGanador + ". Ganaste $" + montoGanado + ".";
  } else {
    mensaje = "Perdiste. Apostaste al color " + apuesta + " y salió " + colorGanador + ".";
  }

  document.getElementById("mensaje").innerHTML = mensaje;
}

function mostrarUltimasApuestas() {
  let ultimasApuestas = document.getElementById("ultimasApuestas");
  ultimasApuestas.innerHTML = "";

  for (let i = historialResultados.length - 1; i >= 0 && i >= historialResultados.length - 5; i--) {
    let apuesta = historialResultados[i];
    let listItem = document.createElement("li");
    listItem.textContent = apuesta;
    ultimasApuestas.appendChild(listItem);
  }
}

function mostrarUltimosColoresGanadores() {
  let ultimosColoresGanadores = document.getElementById("ultimosColoresGanadores");
  ultimosColoresGanadores.innerHTML = "";

  let colores = Object.keys(estadisticasColores);
  for (let i = colores.length - 1; i >= 0 && i >= colores.length - 5; i--) {
    let color = colores[i];
    let listItem = document.createElement("li");
    listItem.textContent = color + ": " + estadisticasColores[color];
    ultimosColoresGanadores.appendChild(listItem);
  }
}

document.getElementById("ruleta").addEventListener("click", function() {
  let apuesta = prompt("¿Apostar al color rojo o negro?").toLowerCase();
  if (apuesta === "rojo" || apuesta === "negro") {
    let montoApuesta = parseFloat(prompt("¿Cuánto quieres apostar en dólares?"));
    if (!isNaN(montoApuesta)) {
      let colorGanador = obtenerColorAleatorio();

      historialResultados.push(colorGanador);

      estadisticasColores[colorGanador]++;

      actualizarMensaje(apuesta, colorGanador, montoApuesta);

      mostrarUltimasApuestas();

      mostrarUltimosColoresGanadores();
    } else {
      alert("Monto de apuesta inválido. Por favor, introduce un número válido.");
    }
  } else {
    alert("Apuesta inválida. Por favor, elige entre rojo o negro.");
  }
});

let personas = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' },
  { id: 3, nombre: 'Pedro' },
];

let buscarPorId = (personas, id) => {
  return personas.find(persona => persona.id === id);
};

let personaEncontrada = buscarPorId(personas, 2);
console.log(personaEncontrada);


   






