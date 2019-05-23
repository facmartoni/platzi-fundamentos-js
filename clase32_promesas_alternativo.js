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
    .then(function(personaje){
        console.log(`El personaje ${id} es ${personaje.name}`); 
    })
    .catch(function(id){
        console.log(`El personaje ${id} no puede ser mostrado, lo sentimos :/`); 
    })
}

obtenerPersonaje(1); 

// for(let i=0; i<100; i++){
//     obtenerPersonaje(i); 
// }