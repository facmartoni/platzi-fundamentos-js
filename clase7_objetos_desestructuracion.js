var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona){
    var {nombre} = persona; 
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha); 
imprimirNombreEnMayusculas(dario); 
imprimirNombreEnMayusculas({ nombre: 'Pepito'}); 

// Reto de la clase

function imprimirNombreYEdad({nombre, edad}){
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`); 
}