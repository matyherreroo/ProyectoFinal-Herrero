// Solicitar al usuario el precio del producto
let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

// Solicitar al usuario el descuento en porcentaje
let descuentoPorcentaje = parseFloat(prompt("Ingrese el descuento en porcentaje:"));

// Calcular el descuento en valor decimal
let descuentoDecimal = descuentoPorcentaje / 100;

// Calcular el descuento aplicado al precio del producto
let precioConDescuento = precioProducto - (precioProducto * descuentoDecimal);

// Calcular el incremento del 0.21%
let incremento = precioConDescuento * 0.021;

// Calcular el precio final con el descuento y el incremento
let precioFinal = precioConDescuento + incremento;


// Mostrar el resultado final
alert(`El precio final del producto con el descuento y el incremento es: ${precioFinal}`);



// Solicitar al usuario el precio del producto y las cuotas
var precio = prompt("Ingrese el precio del producto:");
var cuotas = prompt("Ingrese la cantidad de cuotas:");

// Convertir las entradas a números
precio = parseFloat(precio);
cuotas = parseInt(cuotas);

// Calcular el precio de cada cuota
var precioCuota;

if (cuotas > 12) {
  // Calcular el precio de cada cuota con interés
  var interes = precio * 0.15;
  var totalConInteres = precio + interes;
  precioCuota = totalConInteres / cuotas;
} else {
  // Calcular el precio de cada cuota sin interés
  precioCuota = precio / cuotas;
}

// Mostrar el resultado en una alerta
alert("El precio de cada cuota es: $" + precioCuota.toFixed(2));
















