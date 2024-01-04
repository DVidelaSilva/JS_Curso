// CLASE_01_ConceptosGenerales_Sintaxis_Variables 

console.log('CLASE_01_ConceptosGenerales_Sintaxis_Variables')


// ******** VARIABLES *********

// declaracion

let nombre;
let apellido;

// asignacion

nombre = 'Diego';
apellido = 'Videla';


// variables inicializadas

let apodo = 'DAVS';
const edad = 35;

// Operaciones Basicas (Numeros)

let numeroA = 1;
let numeroB = 2;
const numeroC = 3;

//suma

let resultadosuma = numeroA + numeroB;
console.log("resultado suma = " + resultadosuma);

//resta

let resultadoresta = numeroB - numeroA;
console.log("resultado resta = " + resultadoresta);

//producto

let resultadoproducto = numeroB * numeroC;
console.log("resultado producto = " + resultadoproducto);

// Operaciones Basicas (Texto)

let textoA = "Hola ";
let textoB = "Mundo";

//concatenar

let resultadoconcat = textoA + textoB;
console.log(resultadoconcat)



// ********* prompt, consola y alert *********

// prompt

let nombreIngresado = prompt("ingrese su nombre");
console.log(nombreIngresado);

// consola

console.log('Mensaje de prueba');

// alert

alert("Hola DAVS!!")