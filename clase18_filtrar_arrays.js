var juan = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 99,
    altura: 1.56
}

var tutu = {
    nombre: 'franco',
    apellido: 'romano',
    edad: 19,
    altura: 1.70
}

var piti = {
    nombre: 'gaston',
    apellido: 'costas',
    edad: 18,
    altura: 1.72
}

var yo = {
    nombre: 'facundo',
    apellido: 'garcia martoni',
    edad: 19,
    altura: 1.84
}

var pou = {
    nombre: 'benjamin',
    apellido: 'orellana',
    edad: 19,
    altura: 1.40
}

const esAlta = ({altura}) => altura > 1.8; 
const esBaja = ({altura}) => altura < 1.8; 

var personas = [juan, tutu, piti, yo, pou]; 

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja); 

console.log(personasAltas); 
console.log(personasBajas); 