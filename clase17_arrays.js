var juan = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 99
}

var tutu = {
    nombre: 'franco',
    apellido: 'romano',
    edad: 19
}

var piti = {
    nombre: 'gaston',
    apellido: 'costas',
    edad: 18
}

var yo = {
    nombre: 'facundo',
    apellido: 'garcia martoni',
    edad: 19
}

var pou = {
    nombre: 'benjamin',
    apellido: 'orellana',
    edad: 19
}

var personas = [juan, tutu, piti, yo, pou]; 

for(let i=0; i<personas.length; i++){
    console.log(`${personas[i].nombre} tiene ${personas[i].edad} años`); 
}