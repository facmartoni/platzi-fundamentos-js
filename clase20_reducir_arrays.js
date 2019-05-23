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
const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
    });

var personas = [juan, tutu, piti, yo, pou]; 

var personasAltas = personas.filter(esAlta);
var personasCms = personas.map(pasarAlturaACms); 

console.log(personasCms); 

// var acum = 0; 

// for(let i=0; i<personas.length; i++){
//     acum+= personas[i].edad;
// }

const reducer = (acum, {edad}) => acum + edad; 

var totalEdades = personas.reduce(reducer, 0); 

console.log(`En total las edades suman ${totalEdades} años`);
