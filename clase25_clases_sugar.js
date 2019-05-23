// Prototipo persona

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
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
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}

// Main


// var sacha = new Persona('Sacha', 'Lifszyc', 1.85);
// var erika = new Persona('Erika', 'Luna', 1.75); 
