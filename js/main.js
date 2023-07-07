let historialResultados = [];
let estadisticasColores = {
  rojo: 0,
  negro: 0
};
let montoAcumulado = 0;

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

function guardarDatosEnLocalStorage() {
  localStorage.setItem("historialResultados", JSON.stringify(historialResultados));
  localStorage.setItem("estadisticasColores", JSON.stringify(estadisticasColores));
  console.log("Datos guardados en localStorage.");
}

function obtenerDatosDeLocalStorage() {
  let historialResultadosData = localStorage.getItem("historialResultados");
  let estadisticasColoresData = localStorage.getItem("estadisticasColores");

  if (historialResultadosData && estadisticasColoresData) {
    historialResultados = JSON.parse(historialResultadosData);
    estadisticasColores = JSON.parse(estadisticasColoresData);
    console.log("Datos obtenidos de localStorage.");
  }
}

function actualizarMensaje(apuesta, colorGanador, montoApuesta) {
  let mensaje = "";

  if (apuesta === colorGanador) {
    let montoGanado = montoApuesta * 2;
    montoAcumulado += montoGanado;
    mensaje = "¡Ganaste! Apostaste al color " + apuesta + " y salió " + colorGanador + ". Ganaste $" + montoGanado + ".";
  } else {
    montoAcumulado -= montoApuesta;
    mensaje = "Perdiste. Apostaste al color " + apuesta + " y salió " + colorGanador + ".";
  }

  document.getElementById("mensaje").innerHTML = mensaje;
  document.getElementById("montoAcumulado").textContent = montoAcumulado;

  guardarDatosEnLocalStorage();
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

  guardarDatosEnLocalStorage();
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

  guardarDatosEnLocalStorage();
} 

document.getElementById("ruletaForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let apuesta = document.getElementById("apuesta").value.toLowerCase();
  if (apuesta === "rojo" || apuesta === "negro") {
    let montoApuesta = parseFloat(document.getElementById("montoApuesta").value);
    if (!isNaN(montoApuesta)) {
      let colorGanador = obtenerColorAleatorio();

      historialResultados.push(colorGanador);

      estadisticasColores[colorGanador]++;

      validarApuesta()

      actualizarMensaje(apuesta, colorGanador, montoApuesta);

      mostrarUltimasApuestas();

      mostrarUltimosColoresGanadores();

      console.log("Apuesta realizada:", apuesta);
      console.log("Monto apostado:", montoApuesta);
      console.log("Color ganador:", colorGanador);
    } else {
      errorNumero()
    }
  } 
});

const errorNumero = () =>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No colocaste un valor válido en tu apuesta'
  })
}
const validarApuesta = () =>{
  Swal.fire({
    icon: 'success',
    title: 'Apuesta realizada con éxito',
    showConfirmButton: false,
    timer: 1000
  })
}

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

obtenerDatosDeLocalStorage();
mostrarUltimasApuestas();
mostrarUltimosColoresGanadores(); 
 
let DatosDolar = document.querySelector("#DatosDolar")
        fetch("https://api.estadisticasbcra.com/usd", {
        headers:{ 
        Authorization:" BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjAyMTA3NzUsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJoZXJyZXJvbWF0aWFzMTIzQGdtYWlsLmNvbSJ9.CHXxh5TpheEs7eKR10dy6UhEZVMSlS_dWvsTMV8jHhbsGNJ3iTIwiMogXikAHj2pl7UFseLXELzLgo-Lalu2yg"
        }
        })
        .then ((response) => response.json())
        .then((data)=>{
          console.log(data);
          data.forEach(info => {
            const content = document.createElement("div")
            content.innerHTML = `
            <h4>valor del dolar actualizado: ${info.d}</h4>
            `
            DatosDolar.append(content)
          });
        }) 
