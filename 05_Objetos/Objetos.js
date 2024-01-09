console.log("Clase 05 - Objetos");

// OBJETOS LITERALES

/*

const persona = {
    nombre : "Lucas",
    apellido : "Ruiz",
    dni : 2342,
    casado : false

};

*/

/*
console.log(persona.nombre);  // visualizar valor de un objeto
console.log(persona.apellido);


console.log(typeof(persona))  //Ver el tipo de dato que esta guardado en la variable

console.log(persona.casado);

persona.casado = true; //Actualizar valor de Objeto

console.log(persona.casado);

persona.telefono = "123456789";  // Añadir una nueva variable al objeto (no es buena practica esto)

*/


/*
// OBJETOS con funcion CONSTRUCTORA

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}


const producto1 = new Producto('TV 32', 200000);
const producto2 = new Producto('Notebook', 500000);
const producto3 = new Producto('cafetera', 30000);

console.log(producto1);
console.log(producto1.nombre);

console.log(producto2);
console.log(producto2.nombre);

console.log(producto3);
console.log(producto3.nombre);

*/

/*

const Saludar = function(nombre){

}

const persona = {
    // ATRIBUTOS
    nombre : "Lucas",
    apellido : "Ruiz",
    dni : 2342,
    casado : false,
    // METODO
    Saludar: function(){
        alert("Hola soy, " + this.nombre)
    },
    actualizarEstado: function(estado){
        this.casado = estado;
    }

};

persona.Saludar();

*/

/*

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    TouchList.precioFinal = 0;

    //METODOS

    TouchList.sumarIVA = function(){
        this.precioFinal = this.precio * 1.21;
        alert("El precio es $ " + this.precio + " | con IVA es $ " + this.precioFinal)
    }
}
*/

// Version con CLASES

class Perro {
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }

    ladrar = function(){
        alert("woof");
    }
}

const perro1 = new Perro('Laika', 'negro');
const perro2 = new Perro('Kiyomi', 'blanco');
const perro3 = new Perro('Pancho', 'Marron');

console.log(perro1);