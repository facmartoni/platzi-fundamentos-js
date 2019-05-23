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

function cumpleAnos(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}
