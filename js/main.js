// pide el precio del producto
/* let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

// pide al usuario que introduzca el porcentaje del % de descuento
let descuentoPorcentaje = parseFloat(prompt("Ingrese el descuento en porcentaje:"));

// Calcula el descuento en valor decimal
let descuentoDecimal = descuentoPorcentaje / 100;

// Calcula el descuento aplicado al precio del producto
let precioConDescuento = precioProducto - (precioProducto * descuentoDecimal);

// Calcula el incremento del 0.21%
let incremento = precioConDescuento * 0.021;

// Calcula el precio final con el descuento y el incremento
let precioFinal = precioConDescuento + incremento;


// Muestra el resultado final
alert(`El precio final del producto con el descuento y el incremento es: ${precioFinal}`);



// Solicita al usuario el precio del producto y las cuotas
var precio = prompt("Ingrese el precio del producto:");
var cuotas = prompt("Ingrese la cantidad de cuotas:");

// Convierte las entradas a números
precio = parseFloat(precio);
cuotas = parseInt(cuotas);

// Calcula el precio de cada cuota
var precioCuota;

if (cuotas > 12) {
  // Calcula el precio de cada cuota con interés del 15
  var interes = precio * 0.15;
  var totalConInteres = precio + interes;
  precioCuota = totalConInteres / cuotas;
} else {
  // Calcula el precio de cada cuota sin interés
  precioCuota = precio / cuotas;
}

// Muestra el resultado de el precio de cada cuota
alert("El precio de cada cuota es: $" + precioCuota.toFixed(2));
 */
/* console.log("numero aleatorio" + Math.random());
console.log("numero aleatorio de 0 a 10") + Math.random() * 10
const frases = [
  "ganaste 10 pesos",
  "ganaste 3 pesos",
  "ganaste 3 millones de pesos",
  "no ganaste nada",
  "perdiste 40 dolares",
  "perdiste 30 mil pesos",
 "Perdiste toda tu apuesta"]
 {
  if (frases[0]) {
  alert( frases[0] + " "+ "alta suerte")
  }
  else if (frases[1]) {
    alert( frases[1] + " "+ "alta suerte")
    }
 else if (frases[2]) {
    alert( frases[2] +" " +  "alta suerte")
    }
 else if (frases[3]) {
    alert( frases[3] == " " + "alta suerte")
        }
  else if (frases[3]) {
    alert( frases[3] == " " + "alta suerte")
   }
   else if (frases[4]) {
    alert( frases[4] ==  " " + "mal ahi")
   }                 
 }
console.log(frases);
let pos = Math.floor(Math.random() * frases.length)
alert(frases [pos]) */

function generarNumeroAleatorio() {
    return Math.random();
}

function obtenerColorAleatorio() {
    var numero = generarNumeroAleatorio();
    if (numero < 0.5) {
        return "rojo";
    } else {
        return "negro";
    }
}


function actualizarMensaje(apuesta, colorGanador, montoApuesta) {
    var mensaje = "";

    if (apuesta === colorGanador) {
        var montoGanado = montoApuesta * 2;
        mensaje = "¡Ganaste! Apostaste al color " + apuesta + " y salió " + colorGanador + ". Ganaste $" + montoGanado + ".";
    } else {
        mensaje = "Perdiste. Apostaste al color " + apuesta + " y salió " + colorGanador + ".";
    }

    document.getElementById("mensaje").innerHTML = mensaje;
}

document.getElementById("ruleta").addEventListener("click", function() {
    var apuesta = prompt("¿Apostar al color rojo o negro?").toLowerCase();
    if (apuesta === "rojo" || apuesta === "negro") {
        var montoApuesta = parseFloat(prompt("¿Cuánto quieres apostar en dólares?"));
        if (!isNaN(montoApuesta)) {
            var colorGanador = obtenerColorAleatorio();
            actualizarMensaje(apuesta, colorGanador, montoApuesta);
        } else {
            alert("Monto de apuesta inválido. Por favor, introduce un número válido.");
        }
    } else {
        alert("Apuesta inválida. Por favor, elige entre rojo o negro.");
    }
});
