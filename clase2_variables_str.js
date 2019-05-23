var nombre = 'Facundo', apellido = 'Martoni';

var nombreEnMayusculas = nombre.toUpperCase(); 
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0); 
var cantidadDeLetrasDelNombre = nombre.length; 

var nombreCompleto = nombre + ' ' + apellido; 
var nombreCompleto = `${nombre} ${apellido}`;

var str = nombre.substr(1, 2); 

//Ejercicio: Mostrarle al usuario cual es la última letra de su nombre

var user = 'Facundo'; 
console.log(user.charAt(user.length - 1)); 
