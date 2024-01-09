console.log("Clase 06 - Arrays");

// DECLARACION

const arrayA = [];

const arrayB = [1, 2, 3, 4, 5];

const arrayC = ["Hola", "Chao"];

const arrayD = [1, "Hola", 2, 3, true];


// ACCESO AL ARRAY
/*
console.log(arrayC[0]);
console.log(arrayC[1]);

let resultado = arrayB[1] + arrayB[2];
console.log(resultado);
*/

// RECORRIDO DEL ARRAY
/*
for (let i = 0; i < 5; i++){
    alert(arrayB[i]);
}
*/


// METODOS y PROPIEDADES

//Length

/*
console.log(arrayC.length);


const numeros = [1, 2, 3, 4, 5, 6, 7];

for(let i = 0; i < numeros.length; i++) {
    alert(numeros[i]);
}

*/


// AGREGAR ELEMENTOS

// push - agrega al final de la lista

const miArray1 = ["Diego", "Videla", "Silva"];

miArray1.push("Arturo")

console.log(miArray1);

// unshift - agrega al inicio de la lista

const miArray2 = ["Diego", "Videla", "Silva"];

miArray2.unshift("Arturo")

console.log(miArray2);

// ELIMINAR ELEMENTOS

// pop - eliminar el ultimo elemento

const miArray3 = ["Diego", "Videla", "Silva"];

miArray3.pop()

console.log(miArray3);

// shift - eliminar el primer elemento

const miArray4 = ["Diego", "Videla", "Silva"];

miArray4.shift()

console.log(miArray4);


// splice - eliminar elementos seleccionados

const miArray5 = ["Diego", "Arturo", "Videla", "Silva"];

miArray5.splice(0, 2)

console.log(miArray5);

// Join - Unir separados por el valor especificado

const miArray6 = ["Diego", "Arturo", "Videla", "Silva"];

console.log(miArray6.join("*"));

// concat - unir varios arrays

const perros = ["pupy", "Ronnie"];
const gatos = ["mishi", "Garfield", "zuri"];
const mascotas = perros.concat(gatos);

console.log(mascotas);

//slice - genera una copia de una parte de una lista en una nueva lista

const miArray7 = ["Diego", "Arturo", "Videla", "Silva"];

const miArray8 = miArray7.slice(0, 2);

console.log(miArray7);
console.log(miArray8);


// indexOf - Permite obtener el indice de un elemento en un array

const miArray9 = ["Diego", "Arturo", "Videla", "Silva"];

console.log(miArray9.indexOf("Videla"));

// include - devuelve true o falso si el elemento esta o no en la lista

const miArray10 = ["Diego", "Arturo", "Videla", "Silva"];

console.log(miArray10.includes("Videla"));

// reverse - Invierte el orden de los elementos del array

const miArray11 = ["Diego", "Arturo", "Videla", "Silva"];

console.log(miArray11.reverse());




// Array de Objetos

const objeto1 = {id : 1, producto: "Arroz"};

const array = [objeto1, {id : 2, producto : "Fideo"}];

array.push({id: 3, producto: "pan"});

console.log(array)