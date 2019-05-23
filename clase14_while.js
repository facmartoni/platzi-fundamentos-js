var facundo = {
    nombre: 'Facundo',
    apellido: 'Garcia',
    edad: 19,
    peso: 90
}

console.log(`Al inicio del año ${facundo.nombre} pesa ${facundo.peso}kg`);

const MODIFICACION_PESO = .3; 
const META = facundo.peso - 3; 
var contador = 0; 

const aumentarDePeso = (persona, incremento) => persona.peso += incremento; 
const bajarDePeso = (persona, decremento) => persona.peso -= decremento; 
const comeMucho = () => Math.random() < .3; 
const realizaDeporte = () => Math.random() > .4; 

while(facundo.peso > META){
    if(comeMucho()){
        aumentarDePeso(facundo, MODIFICACION_PESO);
    }
    if(realizaDeporte()){
        bajarDePeso(facundo, MODIFICACION_PESO);
    }
    contador++; 
}

console.log(`Pasaron ${contador} días hasta que ${facundo.nombre} adelgazó 3kg`);

