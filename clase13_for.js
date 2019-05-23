var facundo = {
    nombre: 'Facundo',
    apellido: 'Garcia',
    edad: 19,
    peso: 90
}

console.log(`Al inicio del año ${facundo.nombre} pesa ${facundo.peso}kg`);

const MODIFICACION_PESO = .2; 

const aumentarDePeso = (persona, incremento) => persona.peso += incremento; 
const bajarDePeso = (persona, decremento) => persona.peso -= decremento; 

for(var i=0; i<365; i++){
    var random = Math.random()
    if(random < 0.25){
        aumentarDePeso(facundo, MODIFICACION_PESO); 
    }
    else if (random < 0.5 && random > 0.25){
        bajarDePeso(facundo, MODIFICACION_PESO); 
    }
}

console.log(`Al final del año ${facundo.nombre} pesa ${facundo.peso.toFixed(1)}kg`);

