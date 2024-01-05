console.log("****Ejercicio2******");

/*

// Actividad_1

console.log("Actividad1 - Yo no fui");

let nombre = "DIEGO";

let nombre_input = prompt('Ingrese el nombre de su sospechoso: ');

if (nombre_input.toUpperCase() == nombre) {
    alert("Fui Yo");
}
else{
    alert("yo no fui");
    }

*/

/*

// Actividad_2

console.log("Actividad2 - Presiona y o Y");

let tecla = prompt("Presiona la tecla correcta del teclado...");

if(tecla == 'y' ||  tecla == 'Y') {
    alert('Tecla Correcta!!')
}
else{
    alert("NO!!! tecla Incorrecta")
};

*/

/*

// Actividad_3

console.log("Actividad3 - Escoge a tu personaje");

let opcion = prompt("Ingresa la opcion de tu personaje: \n\nOpciones: \n1) --> Homero \n2) --> Marge \n3) --> Lisa \n4) --> Bart");
opcion = parseInt(opcion);

switch (opcion) {
    case 1:
        alert("Has escogido a Homero");
        break
    case 2:
        alert("Has escogido a Marge");
        break
    case 3:
        alert("Has escogido a Lisa");
        break
    case 4:
        alert("Has escogido a Bart");
        break
    default:
        alert("opcion Invalida");
        break
    
};

*/

/*

// Actividad_4

console.log("Actividad4 - Presupuesto");

let presupuesto = prompt("Ingrese el monto $ de su presupuesto: ");
presupuesto = parseInt(presupuesto);

console.log(presupuesto)


if ((presupuesto >= 0) && (presupuesto <= 1000)) {
    alert("Presupuesto Bajo")
}
else if ((presupuesto >= 1001) && (presupuesto <= 3000)) {
    alert("Presupuesto Medio")
}
else if (presupuesto >= 3000) {
    alert("Presupuesto Alto")
}
else{
    alert('Valor Invalido')
}

*/


// Actividad_5

console.log("Actividad5 - Vacio");

let prod1 = prompt('***Carro de productos Almacen***' + '\n Ingresa el primer Producto: ' );
let prod2 = prompt('***Carro de productos Almacen***' + '\n Ingresa el segundo Producto: ' );
let prod3 = prompt('***Carro de productos Almacen***' + '\n Ingresa el tercer Producto: ' );
let prod4 = prompt('***Carro de productos Almacen***' + '\n Ingresa el cuarto Producto: ' );

if ((prod1 != "") && (prod2 != "") && (prod3 != "") && (prod4 != "")) {
    alert(' Listado de productos: ' + '\n-' + prod1 + '\n-' + prod2 + '\n-' + prod3 + '\n-' + prod4)
}
else{
    alert('ERROR: es necesario cargar todos los Productos')
}