console.log("****Ejercicio7******");

// Actividad_1 - El Visitante

/* let nombre = prompt("Cual es tu nombre?: ");
localStorage.setItem('name', nombre);
const name_ls = localStorage.getItem('name');
alert('El nombre almacenado en localstorage es ... ' + name_ls);
 */




// Actividad_2 - Almacenar el Menu

/* let menu = [];

for(let i = 0; i <=4; i++){

    let input_menu = prompt("ingrese la nueva comida al menu: ");

menu.push(input_menu);
localStorage.setItem('comidas', menu);
}

const menu_localstorage = localStorage.getItem('comidas');
console.log(menu_localstorage);
let menu_msg = '';
const arrayMenu = menu_localstorage.split(',');

for(const nombreComidas of arrayMenu){

    menu_msg += nombreComidas + '\n'
}

alert('Menu: ' + '\n\n' + menu_msg); */




// Actividad_3 - Almacenar Hamburguesa


/* class Hamburguesa {
    constructor(nombre, precio, ingredientes, n_combo){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.ingredientes = ingredientes;
        this.n_combo = parseInt(n_combo);
    }
}

let menu_hamburguesa = [];
let ingredientes = [];

for(let i = 0; i <= 1; i++){

    let elemento1 = prompt("Nombre de la Hamburguesa: ");
    let elemento2 = prompt("precio de la Hamburguesa: ");

    //let elemento3 = [];

    for(let j = 0; j <= 0; j++){
        
        let ingrediente1 = prompt("Primer Ingrediente: ");
        let ingrediente2 = prompt("Segundo Ingrediente: ");
        let ingrediente3 = prompt("Tercer Ingrediente: ");

        ingredientes = [ingrediente1, ingrediente2, ingrediente3];
    }

    let elemento4 = prompt("Numero de Combo: ");

    const hamburguesa = new Hamburguesa(elemento1, elemento2, ingredientes, elemento4);

    menu_hamburguesa.push(hamburguesa);
}

console.log(menu_hamburguesa);


const hamburguesa_localstorage = JSON.stringify(menu_hamburguesa);
localStorage.setItem("menu_hamburguesa", hamburguesa_localstorage); */



// Actividad_4 - Comprar Hamburguesa

/* let hamburguesas_almacenadas = localStorage.getItem('menu_hamburguesa');
console.log(hamburguesas_almacenadas);

let array_ham_almacenadas = JSON.parse(hamburguesas_almacenadas);

let salida = 'Seleccionar Hamburguesa: \n';

for (let i = 0; i < array_ham_almacenadas.length ; i++){

    salida += i + " --> " + array_ham_almacenadas[i].nombre + ' | $ ' + array_ham_almacenadas[i].precio + ' (' + array_ham_almacenadas[i].ingredientes + ') Combo ' + array_ham_almacenadas[i].n_combo + '\n';
}

alert(salida)
let seleccion = parseInt(prompt('Ingresa tu seleccion: '));

if(seleccion >= 0 && seleccion < array_ham_almacenadas.length){
    alert("Hamburguesa Seleccionada: " + array_ham_almacenadas[seleccion].nombre)
}else{
    alert('ERROR de seleccion')
} */



// Actividad_5 - Aumentar Precio

class Hamburguesa {
    constructor(nombre, precio, ingredientes, n_combo){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.ingredientes = ingredientes;
        this.n_combo = parseInt(n_combo);
    }

    aumentoPrecio(){
        this.precio = this.precio + (this.precio * 0.3);
    }

}

let menu_hamburguesa = [];
let ingredientes = [];

for(let i = 0; i <= 1; i++){

    let elemento1 = prompt("Nombre de la Hamburguesa: ");
    let elemento2 = prompt("precio de la Hamburguesa: ");

    //let elemento3 = [];

    for(let j = 0; j <= 0; j++){
        
        let ingrediente1 = prompt("Primer Ingrediente: ");
        let ingrediente2 = prompt("Segundo Ingrediente: ");
        let ingrediente3 = prompt("Tercer Ingrediente: ");

        ingredientes = [ingrediente1, ingrediente2, ingrediente3];
    }

    let elemento4 = prompt("Numero de Combo: ");

    const hamburguesa = new Hamburguesa(elemento1, elemento2, ingredientes, elemento4);

    hamburguesa.aumentoPrecio();

    menu_hamburguesa.push(hamburguesa);    
}

console.log(menu_hamburguesa);

const hamburguesa_localstorage = JSON.stringify(menu_hamburguesa);
localStorage.setItem("menu_hamburguesa", hamburguesa_localstorage);

let hamburguesas_almacenadas = localStorage.getItem('menu_hamburguesa');
console.log(hamburguesas_almacenadas);

let array_ham_almacenadas = JSON.parse(hamburguesas_almacenadas);

let salida = 'Listado Hamburguesa: \n';

for (let i = 0; i < array_ham_almacenadas.length ; i++){

    salida += i + " --> " + array_ham_almacenadas[i].nombre + ' | $ ' + array_ham_almacenadas[i].precio + ' (' + array_ham_almacenadas[i].ingredientes + ') Combo ' + array_ham_almacenadas[i].n_combo + '\n';
}

alert(salida)