const API_URL = 'https://swapi.co/api/'; 
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain: true}; 

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, OPTS, function(data){
            resolve(data); 
        })
        .fail(() => reject(id));  
    })
}

obtenerPersonaje(1)
    .then((personaje) => {
        console.log(`El personaje 1 es ${personaje.name}`); 
        return obtenerPersonaje(2)
    })
    .then((personaje) => {
        console.log(`El personaje 2 es ${personaje.name}`); 
        return obtenerPersonaje(3)
    })
    .then((personaje) => {
        console.log(`El personaje 3 es ${personaje.name}`); 
    })
    .catch((id) => {
        console.log(`El personaje ${id} no puede ser mostrado, lo sentimos :/`); 
    })
