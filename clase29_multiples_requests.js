const API_URL = 'https://swapi.co/api/'; 
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain: true}; 
const onResponse = function (person){
    console.log(`Hola, yo soy ${person.name}`); 
};

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, OPTS, onResponse); 
}

for (let i=1; i<=100; i++){
    obtenerPersonaje(i); 
}
