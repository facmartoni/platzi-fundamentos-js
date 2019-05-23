const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

// const cumpleAnos = persona => persona.edad++; 

const cumpleAnosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})