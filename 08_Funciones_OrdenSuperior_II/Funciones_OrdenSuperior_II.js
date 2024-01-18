/* let products = [
    {id: 1, name: 'Samsung TV', price: 600000},
    {id: 2, name: 'DELL notebook', price: 400000},
    {id: 3, name: 'Auriculares Sony', price: 15000},
    {id: 4, name: 'Monitor Philips', price: 120000},
    {id: 5, name: 'Teclado Logitech', price: 30000},
];


// ****** forEach *******

products.forEach(producto => {
    console.log(producto);  // console .log para ver como un listado de objetos
    //console.table(product); // console .table para ver en una tabla 
});

// ****** find ******

// 2 formas de arrow function

const resultado = products.find( producto => producto.id == 1); // opcion 1, se pueden quitar las llaves quitando el "return"

const resultado2 = products.find( producto => producto.name == 'Samsung TV');


//const resultado = products.find( producto => { return producto.id == 1}); // opcion 2, si pongo las llaves debe llevar "return"

console.log(resultado);
console.log(resultado2); */


// MATH

const pi = Math.PI;
console.log(pi)

const valores = [20, 30, 40, 5, 75];
const max = Math.max(20, 30, 40, 5, 75);
const min = Math.min(...valores);
console.log(max);
console.log(min);


const precio = 123.54;
const redondeo = Math.round(precio);
console.log(redondeo)


const aleatorio = Math.random() * 10;
console.log(aleatorio)



// DATE


const fecha = new Date();
console.log(fecha);
