// Función de herenciaw

function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function (){}
    fn.prototype = prototipoPadre.prototype; 
    prototipoHijo.prototype = new fn(); 
    prototipoHijo.prototype.constructor = prototipoHijo; 
}

// Prototipo persona

function Persona(nombre, apellido, altura) {
    this.nombre = nombre; 
    this.apellido = apellido; 
    this.altura = altura; 
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`); 
}

Persona.prototype.soyAlto = function (){
    console.log(`${this.altura >= 1.8 ? 'Soy alto' : 'No soy alto'}`); 
}

// Prototopo desarrollador (hijo de persona)

function Desarrollador(nombre, apellido) {
    this.nombre = nombre; 
    this.apellido = apellido; 
}

heredaDe(Desarrollador, Persona);
 
Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`); 
}

// Main


// var sacha = new Persona('Sacha', 'Lifszyc', 1.85);
// var erika = new Persona('Erika', 'Luna', 1.75); 
