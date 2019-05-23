const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

const yesika = {
    nombre: 'Yesika',
    apellido: 'Cortés',
    edad: 19
}

function saludar(saludo = 'Hola'){
    console.log(`${saludo} mi nombre es ${this.nombre}`); 
}

// const saludarASacha = saludar.bind(sacha); 
// const saludarAYesika = saludar.bind(yesika); 

// setTimeout(saludar.bind(sacha, 'Hola che'), 1000)

// saludar.call(sacha, 'Hola che'); 

saludar.apply(sacha, ['Hola che']); 