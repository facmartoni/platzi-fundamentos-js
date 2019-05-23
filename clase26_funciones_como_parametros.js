// Prototipo persona

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(responderSaludo) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        if(responderSaludo){
            responderSaludo(this.nombre, this.apellido);
        }
    }
    soyAlto() {
        console.log(`${this.altura >= 1.8 ? 'Soy alto' : 'No soy alto'}`);
    }
}

// Prototopo desarrollador (hijo de persona)

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura); 
    }
    
    saludar(responderSaludo) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
        if(responderSaludo){
            responderSaludo(this.nombre, this.apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`); 
    if(esDev) console.log(`Ah mirá, no sabía que eras diviloper`)
}

// Main

var sacha = new Persona('Sacha', 'Lifszyc', 1.85);
var erika = new Desarrollador('Erika', 'Luna', 1.75);

sacha.saludar(responderSaludo); 
erika.saludar(responderSaludo); 
