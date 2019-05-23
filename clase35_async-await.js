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

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    var promesas = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas)
        console.table(personajes)
    } catch (id) {
        console.log(`El personaje ${id} no pudo mostrarse :/`); 
    }
}

obtenerPersonajes(); 

